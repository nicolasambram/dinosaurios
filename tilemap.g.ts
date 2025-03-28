// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "nivel1":
            case "nivel1":return tiles.createTilemap(hex`10001000030303020202030302020103030303030303020103030303030302030303030303030203030303030301010303030303030303010303030303030302030303030302020303050a0a0b030303020303030303030101090e0f0d01020302030303030103030209100c0d03030302030303030303020306070708010303020103030303030303041111040303030201030303030301030303030303030101030303030303030303030303030303030303030303030303030302010303030303030303030103030103030303030303030303030303020303030303020301030303030103030303030203030303030303020303030302010303030303030203030303`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 2 2 2 . . . . . . . 
. . . . . 2 2 2 2 . . . . . . . 
. . . . . 2 2 2 2 . . . . . . . 
. . . . . 2 2 2 2 . . . . . . . 
. . . . . 2 . . 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.skillmap.islandTile4,sprites.builtin.brick,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthWest,sprites.builtin.field1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
