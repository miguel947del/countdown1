for (let index = 0; index <= 5; index++) {
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.showNumber(5 - index)
}
music.playTone(262, music.beat(BeatFraction.Whole))
basic.showString("go")
basic.forever(function () {
	
})
