const VUELTAS = prompt ("ingrese cantidad de vueltas realizadas")
let sumatoria = 0
let promedio = 0

for(let index = 1; index <= VUELTAS; index++){
    const TIEMPO = prompt ("ingrese el tiempo realizado: "+ index)
    sumatoria = sumatoria + parseFloat(TIEMPO)
    console.log(sumatoria)
}

promedio = sumatoria / VUELTAS

alert("el promedio  por vuelta es: "+ promedio +" minutos")