do {
    let num1 = window.prompt("Introduce un numero")
    let num2 = window.prompt("Introduce otro numero")
    window.alert(dividir(num1, num2))
} while (num2 !== 0)
function dividir(numero1, numero2) {
    return numero1 / numero2
}