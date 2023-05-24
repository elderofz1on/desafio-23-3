let valor = 0
let status_animacao = 0
function dado () {
    valor = randint(1, 6)
    if (valor == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (valor == 2) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . . .
            . # . . .
            . . . . .
            `)
    } else if (valor == 3) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # . .
            . # . . .
            . . . . .
            `)
    } else if (valor == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
    } else if (valor == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    } else if (valor == 6) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . . . . .
            `)
    }
}
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) < 850) {
        basic.clearScreen()
        pins.digitalWritePin(DigitalPin.P2, 1)
        status_animacao = 0
        basic.pause(500)
        dado()
        basic.pause(2000)
        status_animacao = 1
    }
})
basic.forever(function () {
	
})
