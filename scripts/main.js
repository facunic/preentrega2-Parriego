import { products } from './datos/products.js';

const Categoria1 = "men's clothing";
const Categoria2 = "electronics";
const Categoria3 = "women's clothing";

function filtrarCategorias(array, categoria1, categoria2, categoria3) {
    return array.filter(producto => producto.category === categoria1 || producto.category === categoria2 || producto.category === categoria3);
}

let productos = filtrarCategorias(products, Categoria1, Categoria2, Categoria3);
const Productos = productos.map(producto => producto.title);

function refactorizarProductos(array) {

    let lista_productos = "";
    array.sort();

    for (let i = 0; i < array.length; i++) {
        lista_productos += (i + 1) + ") " + array[i];

        if (i < array.length - 1) {
            lista_productos += "\n";
        }
    }

    return lista_productos;
}

let listaProductos = refactorizarProductos(Productos);


alert("Bienvenidos a nuestro Ecommerce");
alert("Estos son los productos que tenemos \n -- Ropa de Hombre \n -- Dispositivos electrónicos \n -- Ropa de mujer");

let SelecciondeCompra = parseInt(prompt("Estos son los productos disponibles actualmente: \n seleccione el artículo según el número correspondiente \n" + listaProductos));
if (isNaN(eleccionCompra)) {
    alert("¡Gracias por Visitarnos!");
} else {
    while (eleccionCompra < 1 || eleccionCompra > 10) {
        eleccionCompra = parseInt(prompt("No se encuentra ese artículo, inténtelo de nuevo: \n" + listaProductos));
    }

    let productoSeleccionado;

    do {
        const nombreElegido = Productos[eleccionCompra - 1];

        productoSeleccionado = productos.find(producto => producto.title === nombreElegido);

        if (productoSeleccionado) {
            const mensaje = `Nombre: ${productoSeleccionado.title} \n\n Descripción: ${productoSeleccionado.description} \n\n Precio: $${productoSeleccionado.price}`;
            const confirmarCompra = confirm(`Información del producto:\n\n${mensaje}\n\n¿Desea completar la compra?`);

            if (confirmarCompra) {
                const Fecha = new Date();
                const Entrega = new Date(Fecha);
                Entrega.setDate(Entrega.getDate() + 7);
                alert("Gracias por confiar en nosotros!! la fecha de entrega es: " + Entrega);
            } else {
                alert("¡Gracias por su visita!");
            }
        } else {
            eleccionCompra = parseInt(prompt("El producto seleccionado no se encuentra. Por favor, ingrese el número del producto nuevamente:\n" + listaProductos));
        }
    } while (!productoSeleccionado);
}
