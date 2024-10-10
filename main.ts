let activies = 0
input.onButtonPressed(Button.A, function () {
    activies = randint(1, 3)
    if (activies == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (activies == 2) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    activies = randint(1, 5)
    if (activies == 1) {
        basic.showString("PLAY GAMES ")
    } else if (activies == 2) {
        basic.showString("CLENING")
    } else if (activies == 3) {
        basic.showString("READING")
    } else if (activies == 4) {
        basic.showString("PLAY FORTNITE")
    } else {
        basic.showString("EATING")
    }
})
