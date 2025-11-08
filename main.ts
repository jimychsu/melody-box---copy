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
let melodyBox = sprites.create(assets.image`腳色`, SpriteKind.Player)
tiles.placeOnRandomTile(melodyBox, assets.tile`myTile`)
scene.cameraFollowSprite(melodyBox)
controller.moveSprite(melodyBox)
info.setScore(0)
info.startCountdown(240)
for (let index = 0; index <= 60; index++) {
    dot = sprites.create(assets.image`紅`, SpriteKind.Food)
    dot = sprites.create(assets.image`橘`, SpriteKind.Food)
    dot = sprites.create(assets.image`黃`, SpriteKind.Food)
    dot = sprites.create(assets.image`綠`, SpriteKind.Food)
    dot = sprites.create(assets.image`dot blue`, SpriteKind.Food)
    dot = sprites.create(assets.image`dot殿`, SpriteKind.Food)
    dot = sprites.create(assets.image`紫`, SpriteKind.Player)
    tiles.placeOnRandomTile(dot, assets.tile`myTile`)
}
for (let index = 0; index <= 2; index++) {
    greyRainbow = sprites.create(assets.image`灰色彩虹`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(greyRainbow, assets.tile`myTile`)
}
game.onUpdateInterval(500, function () {
    if (info.score() >= 55) {
        game.gameOver(true)
    }
})
