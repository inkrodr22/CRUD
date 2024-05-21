//Secuencia numerica que empieza con el numero 0 y numero 1 y va sumando los dos ultimos numeros para sacar el siguiente numero
// 0, 1, 1, 2, 3, 5, 8, 13, 21... 
function fibonacci (limite){

    let serie = [0 , 1];

    //Tenemos las posiciones declaradas, empezamos desde 2 porque posicion 0 es 1 y posicion 1 es 1 
    for (let i = 2; i <= limite; i++){
        serie.push(serie[i - 1] + serie[i - 2]);
        console.log(serie);
    }

    return serie;
}

const fibSerie = fibonacci(15);

console.log(fibSerie);