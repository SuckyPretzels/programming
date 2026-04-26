Usage: wc [OPTION]... [FILE]...
Print newline, word, and byte counts for each FILE, and a total line if
more than one FILE is specified.  A word is a non-zero-length sequence of
printable characters delimited by white space.

The options below may be used to select which counts are printed, always in
the following order: newline, word, character, byte.
  -c,        print the byte counts
  -m,        print the character counts
  -l,        print the newline counts
  -w,        print the word counts
             display this help and exit

This is a program i wrote in zig to help learn both zig and low level programming.
it is an attempt to replicate the standard wc binary from GNU coreutils.
