/*
const VUELTAS = prompt ("ingrese cantidad de vueltas realizadas")
let sumatoria = 0
let promedio = 0

for(let index = 1; index <= VUELTAS; index++){
    const TIEMPO = prompt ("ingrese el tiempo realizado: "+ index)
    sumatoria = sumatoria + parseFloat(TIEMPO)
    console.log(sumatoria)
}

promedio = sumatoria / VUELTAS

alert("el promedio  por vuelta es: "+ promedio +" minutos")*/





//EJEMPLO 4 - ARRAYS
/*const arreglo1 = ["remera", "camisa", "sweaters", "buzos", "camperas", "jeans", "pantalones", "vestidos", "kimonos"];
arreglo1.push ("polleras", "shorts");
arreglo1.unshift("accesorios");

for (let i = 0; i < arreglo1.length; i++){
console.log(arreglo1[i].toLocaleUpperCase());
}
*/

//EJEMPLO 5 - FUNCION CONSTRUCTORA
/*
function Remera(img, nombre, precio) {
    this.img = img;
    this.nombre = nombre;
    this.precio = precio;
}

const arreglo = [];

for (let index = 0; index < 10; index++) {
    let img = prompt("ingrese la imagen");
    let nombre = prompt("ingrese el nombre");
    let precio = prompt("ingrese el precio");
    let objeto = new Remera(img, nombre, precio);

    arreglo.push(objeto);

}

console.log(arreglo);

*/
