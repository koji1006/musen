radio.onReceivedNumber(function (receivedNumber) {
    if (TXRX == 0) {
        musen = 0
        if (receivedNumber == 0) {
            while (_type == 0) {
                Direction2()
                basic.pause(2000)
            }
        }
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(TXRX)
    basic.pause(1000)
    if (TXRX == 0) {
        TXRX += 1
    } else {
        TXRX = 0
    }
    if (TXRX == 1) {
        basic.showString("T")
    } else {
        basic.showString("R")
    }
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    if (TXRX == 1) {
        musen = 0
        _type = 0
        basic.showNumber(TNSP)
        basic.pause(1000)
        radio.sendNumber(_type)
        musen = 1
        basic.showIcon(IconNames.EighthNote)
    } else {
        basic.showIcon(IconNames.No)
    }
})
function dispdir () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(500)
    if (TNSP == 0) {
        basic.showString("E")
    }
    if (TNSP == 1) {
        basic.showString("S")
    }
    if (TNSP == 2) {
        basic.showString("W")
    }
    if (TNSP == 3) {
        basic.showString("N")
    }
    basic.pause(1000)
}
function Direction2 () {
    if (input.compassHeading() >= 45) {
        TNSP = 0
        if (input.compassHeading() >= 135) {
            TNSP = 1
            if (input.compassHeading() >= 225) {
                TNSP = 2
                if (input.compassHeading() >= 315) {
                    TNSP = 3
                }
            }
        }
    } else {
        TNSP = 3
    }
    disp2()
    dispdir()
}
function disp2 () {
    basic.showNumber(input.compassHeading())
}
let TNSP = 0
let musen = 0
let _type = 0
let TXRX = 0
radio.setGroup(1)
TXRX = 0
_type = 0
musen = 1
basic.forever(function () {
    if (musen) {
        basic.showIcon(IconNames.Heart)
    }
})
