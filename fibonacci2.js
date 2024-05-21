//Empezamos con 0 y 1 y el valor es la suma de los ultimos dos numeros
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55....

function fibonacci1(limite2){

    let serie1 = [0, 1];

    for (let x = 2; x <= limite2; x++){
        serie1.push(serie1[x - 1] + serie1[x - 2]);

    }

    return serie1;

}

const serieFib = fibonacci1(21);
console.log(serieFib);