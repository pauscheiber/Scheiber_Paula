/* Ejercicio 9:
Crear un programa que recibe las notas de un alumno, todos los números deben ser naturales < 11. 
Debe calcular el promedio. Por último imprimir en pantalla si el valor de media es < 5 “Reprobado”,
entre 6 y 8 “Aprobado” y si es mayor a 8 “Sobresaliente”. */


let nombre = prompt ("¿Cuál es el nombre del alumno?")
let notas = []
cantidad_notas = prompt ("¿cuántas notas desea promediar?")
for (let i = 0; i < cantidad_notas; i++) {
    notas [i] = prompt (`Ingrese la nota ${i + 1} del alumno`)
}
let promedio = ""

sacar_promedio(notas)

document.write (`El promedio del alumno ${nombre} es ${promedio}`)
document.write (`</br>`)
document.write (`La consición del alumno ${nombre} es: `)
if (promedio <= 5) {
    document.write(`Reprobado`)

} else if (promedio >= 6 && promedio <= 8) {
    document.write (`Aprobado`)

} else if (promedio > 8){
    document.write (`Sobresaliente`)
}


function sacar_promedio (notas){
    let suma = 0
    let cumple =""
    cantidad_notas = parseInt (cantidad_notas)
    for (let nota of notas){
        nota = parseInt (nota)
        if (nota >= 0 && nota < 11){
            cumple = true
            suma += nota
        } else {
            cumple = false
            alert (`Los datos ingresados para las notas son erroneos. Ingrese números entre 0 y 10`)
        }
    }
    if (cumple = true) {
        promedio = suma / cantidad_notas
    } else {
        document.write (`Error`)
    }
    }