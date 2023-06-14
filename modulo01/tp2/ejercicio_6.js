/*Ejercicio 6:
Escribir un script que muestre la posición de la primera vocal de un texto introducido por
teclado. Por ejemplo: perro = “e” es la letra Nº2 ; árbol = “a” es la letra Nº1. */

let texto = prompt("Ingrese un texto")
const vocales = ['a','e','i','o','u']


for (let vocal of vocales){
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == vocal){
            document.write (`La ${vocal} es la letra Nº ${i + 1}`)
        }
    }
    break;
}
