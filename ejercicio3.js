//Dada una palabra buscarla en una frase y devolver cuantas veces aparaece en ella
//concidencias("Hola soy una palabra en una frase, PALABRA", "palabra") //Devuelve 1
//coincidencias("soy la frase" , "victor") //Devuelve 0

/* 
- Funcion con dos parametro: frase y busqueda
- Poner string en minusculas y limpiarlo
- Comprobar si la busqueda esta incluida en la frase
- crear un array de palabras en la frase
- mapear esa palabras y hacer un contador de cada una
- devolver el contador
*/

function coincidencias(frase, busqueda){
    
    let texto_limpio = frase.toLowerCase().replace(/[!.,-]/gi , '');

    console.log(texto_limpio);

    let resultado = 0;
    if(texto_limpio.includes(busqueda)){

        let palabras = texto_limpio.split(" "); //separar por espacios
        let mapa = {}; //objeto json
       

        for(let palabra of palabras){

            if(mapa[palabra]){
                mapa[palabra]++;
            } else{
                mapa[palabra] = 1;
            }
        }
        
        console.log(palabras);
        console.log(mapa);
        resultado =mapa[busqueda];

    }else{
        resultado = 0;

    }
    return resultado;    
}
console.log(
    "Numero de coincidencias de la frase",
coincidencias("Hola, que tal, soy Inaki. hola tal inaki", 'tal')
//coincidencias("Hola, que tal, soy Inaki. hola tal inaki", 'Irlanda')

)