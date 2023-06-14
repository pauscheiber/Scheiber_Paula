/* Ejercicio 7:
Escribir una función que reciba un texto y lo devuelva al revés. */

let texto = prompt ("Ingrese un texto")

reves_texto(texto)

function reves_texto(texto) {
    reves_texto = ""

    for (let i = texto.length - 1; i >= 0; i--) {    //le pido al for que recorra de atras para adelante la cadena
        reves_texto += texto.charAt(i)               //digo que reves_texto es igual a si mismo mas la letra 
                                                     // en la posicion i
    }

    document.write(`El texto al reves es: ${reves_texto}`)
}

