basic.forever(function () {
    if (input.temperature() > 28) {
        music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
        basic.pause(1000)
    }
    basic.showNumber(input.temperature())
})
