namespace SpriteKind {
    export const p1 = SpriteKind.create()
    export const p2 = SpriteKind.create()
    export const p3 = SpriteKind.create()
    export const p4 = SpriteKind.create()
}
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
	
})
tiles.setCurrentTilemap(tilemap`nivel1`)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . c c c c . . . . . . . . 
    . . c c 2 2 2 2 c c . . . . . . 
    . c 2 2 2 2 2 2 2 2 c . . . . . 
    c 2 2 2 2 2 1 f 2 2 2 c . . . . 
    c 2 2 2 2 2 f f 2 2 2 2 c . . . 
    c 2 2 2 2 2 2 2 2 2 2 2 c . . . 
    c c b b 1 b 2 2 2 2 2 2 d c . . 
    c 2 3 3 3 2 2 2 2 2 d d d c . . 
    . b 2 2 2 2 2 2 2 2 d d d c . . 
    . . c b b c 2 2 b d d d d c c . 
    . c b b c 2 2 b b d d d d c d c 
    . c c c c c c d d d d d d d d c 
    . . . c c c c d 2 2 b d d d c . 
    . . c c c c c b 2 2 b c c c . . 
    . . c b b b c d 2 2 b c . . . . 
    `, SpriteKind.p1))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . c c c c . . . . . . . . 
    . . c c 5 5 5 5 c c . . . . . . 
    . c 5 5 5 5 5 5 5 5 c . . . . . 
    c 5 5 5 5 5 1 f 5 5 5 c . . . . 
    c 5 5 5 5 5 f f 5 5 5 5 c . . . 
    c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
    c c b b 1 b 5 5 5 5 5 5 d c . . 
    c 5 3 3 3 5 5 5 5 5 d d d c . . 
    . b 5 5 5 5 5 5 5 5 d d d c . . 
    . . c b b c 5 5 b d d d d c c . 
    . c b b c 5 5 b b d d d d c d c 
    . c c c c c c d d d d d d d d c 
    . . . c c c c d 5 5 b d d d c . 
    . . c c c c c b 5 5 b c c c . . 
    . . c b b b c d 5 5 b c . . . . 
    `, SpriteKind.p2))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . c c c c . . . . . . . . 
    . . c c 7 7 7 7 c c . . . . . . 
    . c 7 7 7 7 7 7 7 7 c . . . . . 
    c 7 7 7 7 7 1 f 7 7 7 c . . . . 
    c 7 7 7 7 7 f f 7 7 7 7 c . . . 
    c 7 7 7 7 7 7 7 7 7 7 7 c . . . 
    c c b b 1 b 7 7 7 7 7 7 d c . . 
    c 7 3 3 3 7 7 7 7 7 d d d c . . 
    . b 7 7 7 7 7 7 7 7 d d d c . . 
    . . c b b c 7 7 b d d d d c c . 
    . c b b c 7 7 b b d d d d c d c 
    . c c c c c c d d d d d d d d c 
    . . . c c c c d 7 7 b d d d c . 
    . . c c c c c b 7 7 b c c c . . 
    . . c b b b c d 7 7 b c . . . . 
    `, SpriteKind.p3))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . c c c c . . . . . . . . 
    . . c c 9 9 9 9 c c . . . . . . 
    . c 9 9 9 9 9 9 9 9 c . . . . . 
    c 9 9 9 9 9 1 f 9 9 9 c . . . . 
    c 9 9 9 9 9 f f 9 9 9 9 c . . . 
    c 9 9 9 9 9 9 9 9 9 9 9 c . . . 
    c c b b 1 b 9 9 9 9 9 9 d c . . 
    c 9 3 3 3 9 9 9 9 9 d d d c . . 
    . b 9 9 9 9 9 9 9 9 d d d c . . 
    . . c b b c 9 9 b d d d d c c . 
    . c b b c 9 9 b b d d d d c d c 
    . c c c c c c d d d d d d d d c 
    . . . c c c c d 9 9 b d d d c . 
    . . c c c c c b 9 9 b c c c . . 
    . . c b b b c d 9 9 b c . . . . 
    `, SpriteKind.p4))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Four))
scene.cameraFollowSprite(sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . c c c c . . . . . . . . 
    . . c c 2 2 2 2 c c . . . . . . 
    . c 2 2 2 2 2 2 2 2 c . . . . . 
    c 2 2 2 2 2 1 f 2 2 2 c . . . . 
    c 2 2 2 2 2 f f 2 2 2 2 c . . . 
    c 2 2 2 2 2 2 2 2 2 2 2 c . . . 
    c c b b 1 b 2 2 2 2 2 2 d c . . 
    c 2 3 3 3 2 2 2 2 2 d d d c . . 
    . b 2 2 2 2 2 2 2 2 d d d c . . 
    . . c b b c 2 2 b d d d d c c . 
    . c b b c 2 2 b b d d d d c d c 
    . c c c c c c d d d d d d d d c 
    . . . c c c c d 2 2 b d d d c . 
    . . c c c c c b 2 2 b c c c . . 
    . . c b b b c d 2 2 b c . . . . 
    `, SpriteKind.p1))
