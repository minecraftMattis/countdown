for (let Index = 0; Index <= 2; Index++) {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    basic.showNumber(3 - Index)
}
music.play(music.tonePlayable(392, music.beat(BeatFraction.Double)), music.PlaybackMode.InBackground)
basic.showString("LOS!")
