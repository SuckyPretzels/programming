const std = @import("std");

pub fn main() void {
    var x: u8 = 0;
    while (x <= 10) {
        std.debug.print("x = {}\n", .{x});
        x += 1;
    }
}
