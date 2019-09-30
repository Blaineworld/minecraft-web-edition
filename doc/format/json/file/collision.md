# Minecraft: Web Edition's Collision JSON Format
The Collision JSON format is used to specify hitboxes for stuff. That's it, pretty much. If the `cuboid` and `cuboids` tags are absent, the collision file can be a valid cuboid but with added support for the properties listed below.

## Structure & Values
```
cuboid: any valid cuboid (optional) - The cuboid that should be used.
cuboids: array (optional) - The cuboids that should be used. This tag takes priority over cuboid.
    (a cuboid): any valid cuboid
parent: string (optional) - The namespaced ID of another collision file to inherit any unspecified data from. Defaults to none.
unit: number (optional) - The fraction of a block to treat as one unit. Larger values than 1 will result in larger units. Defaults to 1.
```