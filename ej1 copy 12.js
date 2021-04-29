do {
    anno = parseInt(window.prompt("Introduce el año para saber si es bisiesto:"))

    bisiesto(anno)
        ? window.alert(`el ${anno} es bisiesto`)
        : window.alert(`el ${anno} no es bisiesto`)
} while (anno !== 0)

function bisiesto(anno) {
    if (anno % 4 !== 0) {
        return false
    } else if (anno % 4 !== 0 && anno % 100 !== 0) {
        return true
    } else if (anno % 4 === 0 && anno % 100 === 0 && anno % 400 === 0) {
        return true
    } else {
        return false
    }
}