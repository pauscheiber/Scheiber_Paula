/* Ejercicio 4:
Escribir el código de una función a la que se pasa como parámetro un número entero y
devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por
pantalla el resultado devuelto por la función.
Por ejemplo si ingresara un dos el resultado debe ser par y si ingresara un 5 el resultado
debe ser impar. */

let numero
numero = prompt (`Ingrese un número entero`)

par_impar(numero)

function par_impar (numero){
    if(numero % 2 == 0){
        document.write (`El número ingresado es par`)
    } else if( numero % 2 == 1){
        document.write (`El número ingresado es impar`)
    } else{
        document.write (`El número ingresado no es entero`)
    }
}


