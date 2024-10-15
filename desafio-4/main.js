function sumarProductos (precioUnitario, cantidadDeseada) {
    let totalGastado = precioUnitario * cantidadDeseada;
    console.log(`total gastado: $ ${totalGastado}`);
}

let precio = 10;
let cantidad = prompt("Indique la cantidad que desea llevar: ");
let totalGastado = sumarProductos(precio, cantidad);