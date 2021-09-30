input.onButtonPressed(Button.A, function () {
    szam += 1
    basic.showNumber(szam)
})
input.onGesture(Gesture.Shake, function () {
    osszeg = osszeg + szam
    basic.showNumber(osszeg)
    osszeg = 0
})
input.onButtonPressed(Button.B, function () {
    osszeg = osszeg + szam
    szam = 0
})
let szam = 0
let osszeg = 0
osszeg = 0
szam = 0
basic.clearScreen()
