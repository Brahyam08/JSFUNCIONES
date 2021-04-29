let cambio = window.prompt("Escribe dolares,yenes o libras segun la moneda a cambiar ").toLowerCase()

let cantidad = parseInt(window.prompt("escribe la cantida en euros"))
function convertir(cantidad, moneda) {
    if (moneda === "dolares") {
        return cantidad * 0.86
    } else if (moneda === "yenes") {
        return cantidad * 129.852
    } else if (moneda === "libras") {
        return cantidad * 1.28611
    } else {
        return " te has colado"
    }
}

window.prompt(`Tus ${cantidad}E son ${convertir(cantidad, cambio)} en ${cambio}`)