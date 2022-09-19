input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.ScreenUp, function () {
    sprite.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.ScreenDown, function () {
    sprite.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
let sprite: game.LedSprite = null
basic.showIcon(IconNames.Yes)
sprite = game.createSprite(2, 2)
basic.forever(function () {
	
})
