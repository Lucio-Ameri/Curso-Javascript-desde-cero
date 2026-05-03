const costoBase = 1.16;
let propiedadIngresada, ubicacionIngresada, metrosCuadrados, numeroMetros, fmPropiedad, fmUbicacion, resultado;


//Pido el tipo de PROPIEDAD hasta que lo ingresado sea correcto
let booleano = true;
while(booleano){
    propiedadIngresada = prompt("Ingrese el tipo de PROPIEDAD a cotizar: \nCasa \nP.H. \nDto. Edificio \nBarrio Privado \nOficina \nLocal comercial \nDepósito logística");
    propiedadIngresada = propiedadIngresada.trim().toLowerCase();
    
    if(propiedadIngresada !== ""){
        for(propiedad of datosPropiedad){
            if(propiedad.tipo === propiedadIngresada){
                fmPropiedad = propiedad;
                booleano = false;
                break;
            }
        }
    }

    else{
        alert("EL TIPO DE PROPIEDAD INGRESADO, ES INCORRECTO.");
    }
}



//Pido el tipo de UBICACION hasta que lo ingresado sea correcto
booleano = true;
while(booleano){
    ubicacionIngresada = prompt("Ingrese el tipo de UBICACION a cotizar: \ncaba \ntandil \ncosta atlantica \npatagonia argentina");
    ubicacionIngresada = ubicacionIngresada.trim().toLowerCase();
    
    if(ubicacionIngresada !== ""){
        for(ubicacion of datosUbicacion){
            if(ubicacion.tipo === ubicacionIngresada){
                fmUbicacion = ubicacion;
                booleano = false;
                break;
            }
        }
    }

    else{
        alert("EL TIPO DE UBICACION INGRESADO, ES INCORRECTO.");
    }
}



//Pido los METROS CUADRADOS hasta que lo ingresado sea correcto
booleano = true;
while(booleano){
    metrosCuadrados = prompt("Ingrese los metros cuadrados de su hogar (ENTRE [20 Y 500]):");
    
    numeroMetros = Number(metrosCuadrados);
    
    if (metrosCuadrados.trim() !== "" && Number.isFinite(numeroMetros) && (numeroMetros >= 20) && (numeroMetros <= 500)) {
        booleano = false;
    } 
    
    else {
        alert("EL NUMERO INGRESADO ES EQUIVOCADO, INGRESE UN NUMERO ENTRE [20 Y 500]! VUELVA A INTENTARLO.");
    }
}


//Si hay datos correctos, calculo y muestro el resultado, sino imprimo un mensaje de error.
if(fmPropiedad && fmUbicacion && parseInt(numeroMetros)){
    resultado = (((costoBase * numeroMetros) * fmPropiedad.multiplicador) * fmUbicacion.multiplicador);
    alert("El costo base por metro cuadrado es de $" + resultado.toFixed(2));
}
else{
    alert("OCURRIO UN ERROR INESPERADO!.")
}
