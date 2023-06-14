/*Ejercicio 1:
A partir del siguiente array que se proporciona:
var valores = [true, false, 2, "hola", "mundo", 3, "char"];
1. Determinar cuál de los “elementos de texto” es mayor, es decir el que contenga más letras.
2. Imprimir estos elementos de menor a mayor cantidad de letras.
3. Determinar el resultado de las cuatro operaciones matemáticas básicas (suma, resta,
multiplicación y división) realizadas con los dos elementos numéricos*/


var valores = [true, false, 2, "hola", "mundo", 3, "char"]


let mayor = ""
for(let valor of valores) {
    tipo = typeof (valor)

    //1.
    if (tipo == `string`){
        if (valor.length > mayor.length){
            mayor = valor
            
        }
    }

    //3.
    if (tipo == `number`){
        
    }
}
console.log(`El elemento de texto más largo es ${mayor}`)

//2.
//convertir las palabras en letras de orden alfabetico segun su longitud


