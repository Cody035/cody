function Casual () {
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
function Insane () {
	
}
function Challenge () {
	
}
input.onButtonPressed(Button.A, function () {
    判定值 = 1
})
function Nightmare () {
	
}
input.onButtonPressed(Button.B, function () {
    判定值 = 2
})
let 判定值 = 0
let 羊狼 = 0
let Start = 0
for (let index = 0; index < 1000; index++) {
    Start = 0
    if (Start == 0) {
        basic.showNumber(1)
        basic.pause(1000)
        if (input.buttonIsPressed(Button.A)) {
            Casual()
        }
        if (input.buttonIsPressed(Button.B)) {
            Start += 1
        }
    }
    if (Start == 1) {
        basic.showNumber(2)
        basic.pause(1000)
        if (input.buttonIsPressed(Button.A)) {
            Challenge()
        }
        if (input.buttonIsPressed(Button.B)) {
            Start += 1
        }
    }
    if (Start == 2) {
        basic.showNumber(3)
        basic.pause(1000)
        if (input.buttonIsPressed(Button.A)) {
            Insane()
        }
        if (input.buttonIsPressed(Button.B)) {
            Start += 1
        }
    }
    if (Start == 3) {
        basic.showNumber(4)
        basic.pause(1000)
        if (input.buttonIsPressed(Button.A)) {
            Nightmare()
        }
        if (input.buttonIsPressed(Button.B)) {
            Start = 0
        }
    }
}
