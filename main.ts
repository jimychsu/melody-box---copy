namespace SpriteKind {
    export const PowerUp = SpriteKind.create()
}
info.onCountdownEnd(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
    if (isTimingDots == true) {
    	
    } else {
        isTimingDots = true
        dotsCollectedInTimeWindow = 0
    }
})
let dotsCollectedInTimeWindow = 0
let isTimingDots = false
let greyRainbow: Sprite = null
let dot: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
let melodyBox = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . e e e e e e e e e e e e . . 
    . . e e e e e e e e e e e e . . 
    . . e f f f f e e f f f f e . . 
    . . e f f f f e e f f f f e . . 
    . . e f f f f e e f f f f e . . 
    . . e e e e e e e e e e e e . . 
    . . e e e e e e e e e e e e . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(melodyBox, assets.tile`transparency16`)
scene.cameraFollowSprite(melodyBox)
controller.moveSprite(melodyBox)
info.setScore(0)
info.startCountdown(240)
for (let index = 0; index <= 60; index++) {
    dot = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnRandomTile(dot, assets.tile`transparency16`)
}
for (let index = 0; index <= 2; index++) {
    greyRainbow = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f 1 1 1 1 f f f . . . 
        . . f f f 1 1 1 1 1 1 f f f . . 
        . f f f 1 1 1 1 1 1 1 1 f f f . 
        . f f 1 1 1 1 . . 1 1 1 1 f f . 
        . f f 1 1 1 1 . . . 1 1 1 f f . 
        . f f 1 1 1 . . . . . 1 1 f f . 
        . f 1 1 1 . . . . . . 1 1 1 f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(greyRainbow, assets.tile`transparency16`)
}
game.onUpdateInterval(500, function () {
    if (info.score() >= 55) {
        game.gameOver(true)
    }
})
