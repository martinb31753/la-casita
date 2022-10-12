const listadoProductos = [

    {
        id: 1,
        Nombre: "Remera",
        precioVenta: 1500,
        cantidad: 1,
        img: "./imagenes/Remera.jpg",
    },

    {
        id: 2,
        Nombre: "Camisa",
        precioVenta: 3000,
        cantidad: 1,
        img: "./imagenes/camisa.jpeg"
    },

    {
        id: 3,
        Nombre: "Buzo",
        precioVenta: 5000,
        cantidad: 1,
        img: "./imagenes/Buzo.jpg"
    },

    {
        id: 4,
        Nombre: "Sweater",
        precioVenta: 4500,
        cantidad: 1,
        img: "./imagenes/sweaterr.webp"
    },

    {
        id: 5,
        Nombre: "Campera",
        precioVenta: 15000,
        cantidad: 1,
        img: "./imagenes/campera.jpeg"
    },

    {
        id: 6,
        Nombre: "Pantalon",
        precioVenta: 10000,
        cantidad: 1,
        img: "./imagenes/Pantalon.jpg"
    },

]

const contenedorProductos = document.getElementById("contenedor-productos")

const contenedorCarrito = document.getElementById("carrito-contenedor")

const botoComprar = document.getElementById ('comprar')

const botonVaciar = document.getElementById('vaciar-carrito')

const contadorCarrito = document.getElementById("contadorCarrito")

const precioTotal = document.getElementById('precioTotal')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

botoComprar.addEventListener ('click', () => {
    carrito.length = 0
    actualizarCarrito()
})




listadoProductos.forEach((producto) => {
    let div = document.createElement("div");
    div.className = "producto";
    div.id = `columna-${producto.id}`
    div.innerHTML = `<div class="card"></div>
        <img src="${producto.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${producto.Nombre}</h5>
        <p class="card-text">$${producto.precioVenta}</p>
        <button id="agregar${producto.id}" class="boton-agregar">Agregar<i class="fas fa-shopping-cart"></i></button>
        </div>
        </div>`

    contenedorProductos.append(div)

    const boton = document.getElementById(`agregar${producto.id}`)
    boton.addEventListener("click", () => {
        agregarAlCarrito(producto.id)
        actualizarCarrito()
    })
});

const agregarAlCarrito = (prodId) => {
    const item = listadoProductos.find((prod) => prod.id === prodId)
    carrito.push(item)


}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()

}


const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.Nombre}</p>
        <p>${prod.precioVenta}</p>
        <p>cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar">Eliminar<i class="fas fa-trash-alt"></button>`

        contenedorCarrito.append(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))
    })

    contadorCarrito.innerText = carrito.length

    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
}

//al finalizar la compra se ejecuta un alert (libreria sweetalert).
let comprar = document. getElementById("comprar");
comprar. addEventListener("click",() =>{
   
Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Su compra fue un exito',
    showConfirmButton: false,
    timer: 3500
  })
})