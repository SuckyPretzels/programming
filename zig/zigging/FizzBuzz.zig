const std = @import("std");

pub fn main() void {
    const max: u32 = 100;
    var i: usize = 1;

    while (i <= max) : (i += 1) {
        if (i % 3 == 0 and i % 5 == 0) {std.debug.print("FizzBuzz\n", .{});}
        else if (i % 3 == 0) {std.debug.print("Fizz\n", .{});}
        else if (i % 5 == 0) {std.debug.print("Buzz\n", .{});}
        else std.debug.print("{d}\n", .{i});
    }
}
