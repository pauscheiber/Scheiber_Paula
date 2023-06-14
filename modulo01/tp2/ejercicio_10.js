/*Ejercicio 10:
Escribir un programa que reciba el número del mes y devuelva si tiene 31, 30 o menos días.
Por ejemplo: si ingreso el mes 12 el resultado debe decir tiene 31 días. */

let mes = prompt (`Ingrese el número del mes que desea conocer sus cantidad de días`)

mes = parseInt (mes)


if (mes >= 1 && mes <=12) {
    switch (mes) {
        case 1: 
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.write (`tiene 31 días`)   
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.write (`tiene 30 días`)
            break;
        case 2:
            document.write (`tiene 28 o 29 días según el año`)
            break;
    } 
} else {
    document.write (`El numero ingresado no corresponde a un mes del año`)
}