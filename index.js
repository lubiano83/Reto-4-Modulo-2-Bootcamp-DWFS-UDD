const ventas = [
    {
      cliente: 'Juan',
      productos: [
        { nombre: 'smartphone', cantidad: 1, precio: 350 },
        { nombre: 'laptop', cantidad: 1, precio: 800 },
      ],
    },
    {
      cliente: 'Ana',
      productos: [
        { nombre: 'smartphone', cantidad: 2, precio: 350 },
        { nombre: 'cámara', cantidad: 1, precio: 250 },
      ],
    },
    {
      cliente: 'Pedro',
      productos: [
        { nombre: 'laptop', cantidad: 1, precio: 800 },
        { nombre: 'cámara', cantidad: 2, precio: 250 },
      ],
    },
];
  
// calcular el subtotal de cada venta
const subTotal = ventas.map(venta => venta.productos.map(item => item.precio * item.cantidad).reduce((a, b) => a + b, 0));
console.log(subTotal);

// calcular total de las ventas
const totalVentas = ventas.map(venta => venta.productos.map(item => item.precio * item.cantidad).reduce((a, b) => a + b), 0).reduce((a, b) => a + b, 0);
console.log(totalVentas);

// calcular la cantidad de productos vendidos por categoría
const cantidadesPorProducto = ventas.reduce((acumulador, venta) => {
    venta.productos.forEach(item => {
      if (acumulador[item.nombre]) {
        acumulador[item.nombre] += item.cantidad; // Sumar cantidades si ya existe el producto
      } else {
        acumulador[item.nombre] = item.cantidad; // Agregar nuevo producto con su cantidad
      }
    });
    return acumulador;
}, {});
  
console.log(cantidadesPorProducto);

  




