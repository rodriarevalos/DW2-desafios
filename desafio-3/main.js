const NombreProducto = "Naranjas";
let PrecioUnitario = 25;
let CantidadDeseada = prompt("¿Cuantas " + NombreProducto + " quiere llevar?");

let CostoTotal = PrecioUnitario * CantidadDeseada;


if (CantidadDeseada >= 5){
    let Descuento = 0.10;
    CostoTotal = CantidadDeseada * PrecioUnitario * (1- Descuento);

    alert(`Se le hace un descuento del 10% por comprar mas de 5 ${NombreProducto}! \n El costo total de su compra es de: ${CostoTotal}`)

} else{
    CostoTotal = CantidadDeseada * PrecioUnitario;
}

alert("El costo total de su compra es: $" + CostoTotal);