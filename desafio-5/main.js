//array de productos 
const producto = ["camiseta","zapatilla", "gorra"];
const productoPrecio= [15,40,10];
let productoStock = [5,6,9];

console.log("productos disponibles:");
for (let i = 0; i<producto.length; i++) {
    console.log(`${producto[i]} \nprecio:$${productoPrecio[i]} \nstock: ${productoStock[i]}`);
};

//simulacion de venta
console.log("simulacion de venta...");

for (let i = 0; i <producto.length; i++){
    if (productoStock[i] > 0){
        productoStock[i]--;
        console.log(`Se vendio una ${producto[i]}`);
    }
    else{
        console.log(`no hay stock de ${producto[i]}`);
    }
};

//actualizacin del stock
console.log("nuevo stock:");

for (let i = 0; i < producto.length; i++) {
    console.log(`${producto[i]} \nNuevo stock: ${productoStock[i]}`);
};