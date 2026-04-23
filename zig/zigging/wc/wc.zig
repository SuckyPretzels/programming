const std = @import("std");
const print = std.debug.print;
const bufferSize: usize = 4096;

const Flag:type = enum {
    bytes,
    chars,
    lines,
    lineMaxWidth,
    words,
};

const Config:type = struct {
    bytes:bool = false,
    chars:bool = false,
    lines:bool = false,
};

pub fn main(init: std.process.Init) !void {
    const io = init.io;
    const allocator = init.arena.allocator();
    var config:Config = Config{};
    // var arena = std.heap.ArenaAllocator.init(std.heap.page_allocator);
    // const allocator = arena.allocator();
    // const gpa = init.gpa;

    const args = try init.minimal.args.toSlice(allocator);
    if (args.len < 2) {
        print("Usage: wc <filepath>\n", .{});
        return;
    }
    const filename = try readArgs(args, &config);
    var file = try std.Io.Dir.cwd().openFile(io, filename, .{});
    defer file.close(io);
    const stat = try file.stat(io);

    var buffer:[bufferSize]u8 = undefined;
    var fileReader = file.reader(io, &buffer);      
    const reader = &fileReader.interface;           
    _ = try reader.readSliceShort(&buffer);


    const newlineCount = countNewline(&buffer);
    const wordCount = countWord(&buffer);
    const bytes = stat.size;
    //TODO: process the config into actual instructions
    //TODO: add support for passing multiple files

    print("{} newlines, {} words, {} bytes {s}\n", .{newlineCount, wordCount, bytes, filename});
}

fn readArgs(args: []const [:0]const u8, config: *Config) ![:0]const u8{
    for (args[1..]) |arg| {
        if (arg.len > 0 and arg[0] == '-') {
            try parseFlags(arg, config);
        } else {
            return arg;
        }
    }
    print("No filename provided\n", .{});
    return error.NoFilename;
}

fn parseFlags(arg:[:0]const u8, config: *Config) !void {
    if (arg.len == 0 or arg[0] != '-') return;
    for (arg[1..]) |char| {
        switch(char) {
            'c' => config.bytes = true,
            'm' => config.chars = true,
            'l' => config.lines = true,
            else => {
                print("Invalid flag: -{c}\n", .{char});
                return error.InvalidFlag;
            }
        }
    }
}

fn countWord(buffer: *[bufferSize]u8) usize {
    var i:usize = 0;
    var count:usize = 0;
    var word:bool = false;
    while (i < buffer.len) : (i += 1) {
        if (buffer[i] == ' ' or buffer[i] == '\n' or buffer[i] == '\t') {
            word = false;
        } else {
            if (!word) {
            count += 1;
            word = true;
            }
        }
    }
    return count - 1;
}

fn countNewline(buffer: *[bufferSize]u8) usize {
    var i: usize = 0;
    var count: usize = 0;
    while (i < buffer.len) : (i += 1) {
        if (buffer[i] == '\n') {
            count += 1;
        }
    }
    return count;
}
