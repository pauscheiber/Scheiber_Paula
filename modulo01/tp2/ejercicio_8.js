/*Ejercicio 8:
Crea una función que genere 100 números aleatorios entre 1 y 100 que no se repitan y luego
imprima por pantalla usando document.write(). */

let num_aletorios = []; 
let cantidad_num = 100;
let num1 = 1
let num2 = 100; 
function crear_aletorios() {
    let numero = ""
    for (let i = 0; i <= cantidad_num ; i++) {
        num1 = Math.ceil (num1);
        num2 = Math.floor (num2);
        numero = Math.floor (Math.random()*(num2 * num1) + num1)
       /* if (!num_aletorios.includes(numero)){
            num_aletorios = numero
        }   me tira error :( */
        num_aletorios = numero
        document.write (num_aletorios)
        document.write ("</br>")
    }
}

crear_aletorios ()

