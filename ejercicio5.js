/*Dibujar un cuadrado hueco con asteriscos

Devuelve 
****
*  *
*  *
****

Funcion para crear el lado de arriba y el lado de abajo
funcion que haga los lados y el hueco del cuadrado
bucle del 0 al tamano del lado menos 2 para equilibar
con el lado de arriba y el de abajo
bucle para pintar los espacios menos 2 para equilibar
con el asteriscos de izq y derc
Ir concatenando en una variable cada linea del caudrado
mostrar el cuadrado.

*/

//funcion para crear lados filas completas de asteriscos
function lado(numero){
    let lado = "";
    
    for(let i = 0; i < numero; i++){
        lado += "*";

    }

    return lado;
}



function cuadradoRelleno(numero){
    
    let dibujo = lado(numero) + "\n";

    let contenido = "";

    for (let i=2; i < numero; i++){
        contenido = "";
        for (let x=0; x<numero; x++){
            contenido += "*";
        }

        dibujo += contenido + "\n";
    }

    dibujo += lado(numero);

    return dibujo;
}

function cuadradoHueco(numero){
    
    //Anadimos el lado de arriba
    let dibujo = lado(numero) + "\n";

    let contenido = "";

    //Filas
    for (let i=2; i < numero; i++){
        //Pared izquierda del cuadrado
        contenido = "*";
        
        //Contenido Hueco
        for (let x=2; x<numero; x++){
            contenido += " ";
        }
        //Pared derecha del cuadrado
        contenido += "*";

        dibujo += contenido + "\n";
    }

    //Anadir lado de abajo al dibujo
    dibujo += lado(numero);

    return dibujo;
}

console.log("Cuadrado Relleno: \n")
console.log(cuadradoRelleno(10))
console.log("\nCuadrado Hueco: \n")
console.log(cuadradoHueco(8))