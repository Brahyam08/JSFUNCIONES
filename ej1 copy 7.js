let numero = parseInt(window.prompt("Introduce un numero"))

function esPar(numero) {
    if (numero % 2 === 0) {
        return true
    } else {
        return false
    }
}
window.alert(esPar(numero))