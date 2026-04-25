const std = @import("std");
const debugPrint = std.debug.print;

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
    var stdout_writer = std.Io.File.stdout().writer(io, &.{});
    var stdout = &stdout_writer.interface;
    var config:Config = Config{};
    var guide = true;

    var args = try init.minimal.args.toSlice(allocator);
    args = args[1..];

    if (args.len < 1) {
        debugPrint("Usage: wc [flags] [filepath]\n", .{});
        return;
    }

    const filenames = try readArgs(allocator, args, &config);

    for (filenames) |filename| {
        var file = try std.Io.Dir.cwd().openFile(io, filename, .{});
        defer file.close(io);
        const stat = try file.stat(io);
        if (stat.size == 0) return error.emptyFile;

        const buffer = try allocator.alloc(u8, stat.size);
        defer allocator.free(buffer);
        _ = try file.readPositionalAll(io, buffer, 0);

        const newlineCount:usize = countNewline(buffer);
        const wordCount:usize    = countWord(buffer);
        const bytes:u64          = stat.size;

        var max_newlines: usize = "newlines".len;
        var max_words:    usize = "words".len;
        var max_bytes:    usize = "bytes".len;
        var max_filename: usize = "filename".len;
        max_newlines            = @max(max_newlines, digitCount(newlineCount));
        max_words               = @max(max_words, digitCount(wordCount));
        max_bytes               = @max(max_bytes, digitCount(bytes));
        max_filename            = @max(max_filename, filename.len);
        //TODO: process the config into actual instructions
        
        if (guide) {
            try stdout.print("newlines | words | bytes | filename\n", .{});
            const barSize = max_newlines + max_words + max_bytes + max_filename;
            var i:usize = 0;

            while (i < barSize + 10) : (i += 1) {
                try stdout.print("—", .{});
            }
            try stdout.print("\n", .{});

            guide = false;
        }

        try printPadded(stdout, newlineCount, max_newlines);
        try stdout.print(" | ", .{});
        try printPadded(stdout, wordCount, max_words);
        try stdout.print(" | ", .{});
        try printPadded(stdout, bytes, max_bytes);
        try stdout.print(" | {s}\n", .{filename});
    }
}

fn printPadded(writer: anytype, value: usize, width: usize) !void {
    try writer.print("{d}", .{value});
    const digits = digitCount(value);
    var i: usize = digits;
    while (i < width) : (i += 1) {
        try writer.print(" ", .{});
    }
}

fn digitCount(n: usize) usize {
    var x = n;
    var count: usize = 1;
    while (x >= 10) : (x /= 10) {
        count += 1;
    }
    return count;
}

fn readArgs(allocator: std.mem.Allocator, args:[]const [:0]const u8, config: *Config) ![]const [:0]const u8 {
    var filenames = std.ArrayList([:0]const u8).empty;
    for (args) |arg| {
        if (arg.len > 0 and arg[0] == '-') {
            try parseFlags(arg, config);
        } else {
            try filenames.append(allocator, arg);
        }
    }
    if (filenames.items.len == 0) {
        debugPrint("No filename provided\n", .{});
        return error.NoFilename;
    }
    return try filenames.toOwnedSlice(allocator);
}

fn parseFlags(arg:[:0]const u8, config: *Config) !void {
    if (arg.len == 0 or arg[0] != '-') return;
    for (arg[1..]) |char| {
        switch(char) {
            'c' => config.bytes = true,
            'm' => config.chars = true,
            'l' => config.lines = true,
            else => {
                debugPrint("Invalid flag: -{c}\n", .{char});
                return error.InvalidFlag;
            }
        }
    }
}

fn countWord(buffer:[]u8) usize {
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
    return count;
}

fn countNewline(buffer:[]u8) usize {
    var i: usize = 0;
    var count: usize = 0;
    while (i < buffer.len) : (i += 1) {
        if (buffer[i] == '\n') {
            count += 1;
        }
    }
    return count;
}
