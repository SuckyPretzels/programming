const std = @import("std");

pub fn main() void {
    var x: u64 = 0;
    var y: u64 = 1;
    var z: u64 = 0;
    const max: usize = 15;
    var i: usize = 0;

    while (i <= max) : (i += 1) {
        std.debug.print("{d}\n", .{x});
        z = x + y;
        x = y;
        y = z;
    }
}
