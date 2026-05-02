const costoBase = 1.16;
let factorMultiplicador, metrosCuadrados, vivienda, resultado;
let numeroVivienda, numeroMetros;

let booleano = true;
while(booleano){
    vivienda = prompt("Ingrese el tipo de vivienda a cotizar: \n1. Casa \n2. P.H. \n3. Dto. Edificio \n4. Barrio Privado \n5. Oficina \n6. Local comercial \n7. Depósito logística");
    
    numeroVivienda = Number(vivienda);
    
    if (vivienda.trim() !== "" && Number.isInteger(numeroVivienda) && (numeroVivienda >= 1) && (numeroVivienda <= 7)) {
        booleano = false;
    } 
    
    else {
        alert("EL NUMERO INGRESADO ES EQUIVOCADO, INGRESE UNO ENTERO ENTRE [1 Y 7]! VUELVA A INTENTARLO.");
    }
}

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


switch(numeroVivienda){
    case 1:
        factorMultiplicador = 1.009;
        break
    case 2:
        factorMultiplicador = 1.005;
        break
    case 3:
        factorMultiplicador = 1.002;
        break
    case 4:
        factorMultiplicador = 1.019;
        break
    case 5:
        factorMultiplicador = 1.039;
        break
    case 6:
        factorMultiplicador = 1.041;
        break
    case 7:
        factorMultiplicador = 1.092;
        break
    default:
        alert("Ocurrio un error! Adios.")
}

if(factorMultiplicador > 1.000 && numeroMetros){
    resultado = (costoBase * numeroMetros) * factorMultiplicador;
    alert("El costo base por metro cuadrado es de $" + resultado.toFixed(2));
}

else{
    alert("Hubo un error en los datos ingresados.")
}