//Dado una cadena de texto darle la vuelta e invertir el orden de sus caracteres sin usar metodos propios del lenguaje, solo estructuras de control
/* Crer una funcion invertir
crear una variable para guardar la cadena invertida
bucle que recorra el string y guarde los caracteres en la variable
devolver esa variable
*/


function invertir(texto){

    let invertido = "";

    //recorremos el texto que nos llega
    for (let letra of texto){
        console.log(letra);
        invertido = letra + invertido; 
    }

    console.log(invertido)

    return invertido;
}

//Utilizando funciones de javascript 
function invertir2(texto){
    return texto.split("").reverse().join("");
}

console.log("texto invertido: ", invertir("hola como estas"))
console.log("texto invertido: ", invertir2("hola como estas"))