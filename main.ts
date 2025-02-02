music.play(music.stringPlayable("C5 B B E A E G F ", 120), music.PlaybackMode.UntilDone)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        # # # # #
        # . # . #
        # . # . #
        # . # . #
        `)
    basic.pause(500)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # . # .
        . # . # .
        . # # # #
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        # # # # #
        # . # . #
        # . # . #
        # . # . #
        `)
    basic.pause(500)
    basic.showLeds(`
        . # . . #
        . # . # .
        . # # . .
        . # . # .
        . # . . #
        `)
    basic.pause(500)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # . # .
        . # . # .
        . # # # #
        `)
    basic.pause(500)
})
