input.onButtonPressed(Button.A, function () {
    判定值 = 1
})
input.onButtonPressed(Button.B, function () {
    判定值 = 2
})
function _1casual () {
    for (let index = 0; index < 10000; index++) {
        羊狼 = randint(1, 2)
        判定值 = 0
        if (羊狼 == 1) {
            basic.showLeds(`
                # # . # #
                . # . # .
                # # # # #
                . # # # .
                . . # . .
                `)
            basic.pause(2000)
            if (判定值 == 1) {
                game.addScore(1)
            } else {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
                basic.showNumber(game.score())
                game.gameOver()
            }
        } else {
            basic.showLeds(`
                . # . . #
                # # . . #
                # # # # .
                . # # # .
                . # . # .
                `)
            basic.pause(2000)
            if (判定值 == 2) {
                game.addScore(1)
            } else {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
                basic.showNumber(game.score())
                game.gameOver()
            }
        }
        basic.pause(1000)
    }
}
let 羊狼 = 0
let 判定值 = 0
_1casual()
