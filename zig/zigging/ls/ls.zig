const std = @import("std");
const print = std.debug.print;

pub fn main(init: std.process.Init) !void {
    const io = init.io;
    const gpa = init.gpa;

    const cwd = try std.Io.Dir.cwd().openDir(io, "/home/pretzels/", .{.iterate = true});
    defer cwd.close(io);

    var it = cwd.iterate();

    var dir = std.ArrayList(std.Io.Dir.Entry).empty;
    defer dir.deinit(gpa);

    while (try it.next(io)) |entry| {
        try dir.append(gpa, entry);
    }

    for (dir.items) |item| {
        if (item.kind == .directory) {
            print("[{s}]\n", .{item.name});
        } else {
            print("{s}\n", .{item.name});
        }
    }
}
