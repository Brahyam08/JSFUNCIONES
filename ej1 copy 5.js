let num1 = parseInt(window.prompt('Dime un número'))
let num2 = parseInt(window.prompt('Dime  otro número'))

function sumar() {
    if (num1 > num2) {
        console.log('El primer numero es mas grande')
        return true
    } else {
        console.log('El primer numero no es mas grande')
        return false
    }

}
console.log(sumar())