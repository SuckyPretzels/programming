const std = @import("std");
const print = std.debug.print;
const bufferSize: usize = 4096;

pub fn main(init: std.process.Init) !void {
    const io = init.io;
    const allocator = init.arena.allocator();
    // var arena = std.heap.ArenaAllocator.init(std.heap.page_allocator);
    // const allocator = arena.allocator();
    // const gpa = init.gpa;

    const args = try init.minimal.args.toSlice(allocator);
    if (args.len < 2) {
        print("Usage: wc <filepath>\n", .{});
        return;
    }
    const filename = args[1];
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

    print("{} newlines, {} words, {} bytes\n", .{newlineCount, wordCount, bytes});

    // while (true) {                                  
    //     var chunk: [bufferSize]u8 = undefined;             
    //     const n = try reader.readSliceShort(&chunk);
    //     if (n == 0) break;                           
    //     print("\nChunk:\n{s}", .{chunk[0..n]});      
    // }                                                
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

pub fn othermain(init: std.process.Init) !void {
    const io = init.io;
    const gpa = init.gpa;
    var file = try std.Io.Dir.cwd().openFile(io, "example.txt", .{});
    defer file.close(io);
    const stat = try file.stat(io);
    if (stat.size == 0) return;
    const buf = try gpa.alloc(u8, stat.size);
    defer gpa.free(buf);
    _ = try file.readPositionalAll(io, buf, 0);
    try std.Io.File.stdout().writeStreamingAll(io, buf);
}
