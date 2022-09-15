
//sistema de pedidos para una pizzeria, los primeros 10 pedidos van con un 25% de descuento( por eso lo realicé con un for)

function Pedidos(nombre, pedido, domicilio) {
    this.nombre = nombre;
    this.pedido = pedido;
    this.domicilio = domicilio;
}

const arreglo = [];

for (let index = 0; index < 10; index++) {
    let nombre = prompt("ingrese su nombre");
    let pedido = prompt("ingrese su pedido según la carta");
    let domicilio = prompt("Ingrese su domicilio");
    let objeto = new Pedidos(nombre, pedido, domicilio);

    arreglo.push(objeto);

    alert ("Pedido confirmado")
}

console.log(arreglo);





//OBJETOS CON METODO.


class Pizza{
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    nombreyvalor(){
    return
}
}


let pizza1 = new Pizza ("muzzarela", "$1500")
let pizza2 = new Pizza ("Napolitana","$1800")
let pizza3 = new Pizza ("Palmitos", "$2000")

console.log(pizza1);
console.log(pizza2);
console.log(pizza3);

console.log (pizza1.nombreyvalor()) 