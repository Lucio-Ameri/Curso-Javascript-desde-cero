let creditosConIntereses = [];
let interesesCalculados = 0;

for(let i = 0; i < creditos.length; i++){
    interesesCalculados = (creditos[i].capital *  creditos[i].plazo * creditos[i].tasa) / 100;

    creditosConIntereses.push({
        nombre: creditos[i].nombre,
        capital: creditos[i].capital,
        plazo: creditos[i].plazo,
        tasa: creditos[i].tasa,
        interes: interesesCalculados
    });
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

alert(crearMensajeCreditos(creditosConIntereses));