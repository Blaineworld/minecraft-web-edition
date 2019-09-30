# Minecraft: Web Edition's "Cuboid" Format
The Cuboid format is a way to concisely represent cuboids like the ones observed during general gameplay of Minecraft. If you don't know what I'm referring to, I hope you're not lost because you probably don't know what Minecraft is! Anyway, here are the different styles possible in the cuboid format:

`null`
A null cuboid isn't a cuboid at all, it's null! That reminds me of your mom's PvP skills in a way. (That was just an unfunny joke and was not intended to actually insult your mom's PvP skills.) The null cuboid is basically useless, like your mom's Pv-

`number: r`
- `r`: the radius for a cube
- Positioning: center of the cube is the origin of the space

`[ number: s ]`
- `s`: the side length for a cube
- Positioning: center of the cube is the origin of the space

`[ number: h, number: v ]`
- `h`: the side-length of the cuboid along the X and Z axes
- `v`: the side-length of the cuboid along the Y axis
- Positioning: center of the cube is the origin of the space

`[ number: l, number: h, number: w ]`
- `l`: the side-length of the cuboid along the X axis
- `h`: the side-length of the cuboid along the Y axis
- `w`: the side-length of the cuboid along the Z axis
- Positioning: center of the cube is the origin of the space

`[ number: x, number: y, number: j, number: k ]`
- `x`: the first corner's position along the X and Z axes
- `y`: the first corner's position along the Y axis
- `j`: the second corner's position along the X and Z axes
- `k`: the second corner's position along the Y axis
- Positioning: coordinates are relative to the origin of the space

`[ number, number, number, number, number ]`
(This style is reserved for future use.)

`[ number: x, number: y, number: z, number: j, number: k, number: l ]`
- `x`: the first corner's position along the X axis
- `y`: the first corner's position along the Y axis
- `z`: the first corner's position along the Z axis
- `j`: the second corner's position along the X axis
- `k`: the second corner's position along the Y axis
- `l`: the second corner's position along the Z axis
- Positioning: coordinates are relative to the origin of the space

`{ "radius": number }`
- `radius`: the radius for a cube
- Positioning: bottom and horizontal center of the cube are the origin of the space

`{ "diameter": number }`
- `diameter`: the diameter for a cube
- Positioning: bottom and horizontal center of the cube are the origin of the space

`{ "height": number, "width": number }`
- `height`: the side-length of the cuboid along the Y axis
- `width`: the side-length of the cuboid along the X and Z axes
- Positioning: bottom and horizontal center of the cuboid are the origin of the space

`{ "height": number, "length": number, "width": number }`
- `height`: the side-length of the cuboid along the Y axis
- `length`: the side-length of the cuboid along the Z axis
- `width`: the side-length of the cuboid along the X axis
- Positioning: bottom and horizontal center of the cuboid are the origin of the space