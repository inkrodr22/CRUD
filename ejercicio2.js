//Dada una cadena de texto comprobar si es un palindromo o no
//Que se leen igual aun estando invertido. ana, bob, otto

/* Funcion con parametro "texto"
separar el texto en un array de letras
darle la vuelta
unir el arary de letras en un string y comparar el string
*/

function palindromo(texto){
    //separamos el string en un array de letras
    //split = separa el string en un array de letras
    //function reverse da la vuelta a un array  
    //Join = unir un texto
    let invertido = texto
                        .split('')
                        .reverse()
                        .join('');
    
    console.log(invertido);
//Regresa un true unicamente si son iguales
    return (invertido === texto);

}

console.log("Es un palindromo? = " + palindromo("radar"));
//Le paso el texto