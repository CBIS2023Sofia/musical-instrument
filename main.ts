input.onGesture(Gesture.TiltRight, function () {
    music.rest(music.beat(BeatFraction.Whole))
})
basic.forever(function () {
    let shake = 0
    basic.showIcon(IconNames.Heart)
    if (shake) {
        let tilt_left = 0
        music.setTempo(120)
        music.play(music.tonePlayable(659, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Whole))
        music.play(music.stringPlayable("C5 A B G A F G E ", 120), music.PlaybackMode.UntilDone)
        if (tilt_left) {
            music.setTempo(120)
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            music.rest(music.beat(BeatFraction.Whole))
            music.play(music.stringPlayable("C5 G E C D F A B ", 100), music.PlaybackMode.UntilDone)
        }
    }
})
