let Intensité = 0
function Bleu () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function Mauve () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
function Rouge () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function Vert () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function Blanc () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 1)
}
basic.forever(function () {
    Intensité = pins.analogReadPin(AnalogPin.P0)
    if (Intensité >= 700) {
        Vert()
    } else if (Intensité < 700 && Intensité >= 600) {
        Bleu()
    } else if (Intensité < 600 && Intensité >= 400) {
        Rouge()
    } else if (Intensité < 400 && Intensité >= 200) {
        Mauve()
    } else {
        Blanc()
    }
})
