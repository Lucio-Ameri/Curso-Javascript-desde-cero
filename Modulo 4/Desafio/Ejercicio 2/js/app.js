
function agregarInteres(propuestas){
    let creditosConIntereses = [];
    let interesesCalculados = 0;

    for(let i = 0; i < propuestas.length; i++){
        interesesCalculados = (propuestas[i].capital *  propuestas[i].plazo * propuestas[i].tasa) / 100;

        creditosConIntereses.push({
            nombre: propuestas[i].nombre,
            capital: propuestas[i].capital,
            plazo: propuestas[i].plazo,
            tasa: propuestas[i].tasa,
            interes: interesesCalculados
        });
    }

    return creditosConIntereses
}

function crearMensajeCreditos(array) {
    let mensaje = "Planes de crédito:\n\n";

    for (let i = 0; i < array.length; i++) {
        mensaje += "Nombre: " + array[i].nombre + "\n";
        mensaje += "Capital: $" + array[i].capital + "\n";
        mensaje += "Plazo: " + array[i].plazo + " días\n";
        mensaje += "Tasa: " + array[i].tasa + "%\n";
        mensaje += "Interés: $" + array[i].interes + "\n";
        mensaje += "------------------------\n";
    }

    return mensaje;
}

alert(crearMensajeCreditos(agregarInteres(creditos)));