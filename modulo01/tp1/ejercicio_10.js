var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

numero = prompt("ingrese el número correspondiente al mes deseado")

switch (numero) {
    case "1":
        document.write(meses[0])
        break;
    case "2":
        document.write(meses[1])
        break;
    case "3":
        document.write(meses[2])
        break;
    case "4":
        document.write(meses[3])
        break;
    case "5":
        document.write(meses[4])
        break;
    case "6":
        document.write(meses[5])
        break;
    case "7":
        document.write(meses[6])
        break;
    case "8":
        document.write(meses[7])
        break;
    case "9":
        document.write(meses[8])
        break;
    case "10":
        document.write(meses[9])
        break;
    case "11":
        document.write(meses[10])
        break;
    case "12":
        document.write(meses[11])
        break;

    default:
        document.write("El número ingresado no corresponde a un mes del año");
        break;
}