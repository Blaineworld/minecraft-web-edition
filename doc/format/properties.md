# The `.properties` File Format
The `.properties` file format is a key-value file format used by Minecraft in the form of `server.properties` and formerly by `options.txt`. It is also used by Optifine and other client mods for various purposes including connected textures, and these files can be used by Minecraft: Web Edition clients as well.

A simple `.properties` file might look like this:

```
# Comment or brief summary
foo=bar
bar=foo
```

Key-value pairs are each on different lines, with the key being `separated=from the value by an equals sign`. Blank lines or lines without an equals sign are ignored. `# Lines beginning with a hash symbol` are comments and as such are also ignored. If a line contains multiple equals signs, the first one will be considered the separator and the other(s) are included in the value. If a key name shows up more than once, the later instances will take priority over the earlier ones. Minecraft: Web Edition's `.properties` parser considers any Carriage Return (`\r`) or Line Feed (`\n`) to be the end of a line. In simpler terms, don't worry about it. It also allows the line separators, value separators, and comment indicators to be changed, for example changing `=` to `:` in order to parse `options.txt`.

Values are always recorded as text strings, and the parser itself will not process any special data types like numbers or JSON literals.

Okay, bye! :)