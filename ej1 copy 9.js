let num = parseInt(window.prompt("introduce un numero:"))

function numeroCifras(numero) {
    if (numero > 0) {
        let cif = numero.toString()
        let cifras = cif.length
        return `Las cifras del numero ${num} son ${cifras}`

    } else {
        return "El numero introducido en negativo"
    }
}

window.alert(numeroCifras(num))