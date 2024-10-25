//array de producto 
const producto = ["camiseta","zapatilla", "gorra"];

console.log("productos disponibles:");
for (let i = 0; i<producto.length; i++) {
    console.log(`${producto[i]}`);
};

//simulacion de venta
console.log("\nsimulacion de venta...");

let productoVendido = producto.pop();
console.log(`se vendio una ${productoVendido}`);