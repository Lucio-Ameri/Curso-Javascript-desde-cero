let egresosTotales = 0;
let ingresosTotales = 0;

function cotizarFlujo(flujoDeEntrada){
    for(let i = 0; i < flujoDeEntrada.length; i++){
        egresosTotales += flujoDeEntrada[i].egreso;
        ingresosTotales += flujoDeEntrada[i].ingreso;
    }

    return ingresosTotales > egresosTotales ? 1 : egresosTotales > ingresosTotales ? -1 : 0;
}

switch(cotizarFlujo(flujoDeCaja)){
    case 1:
        alert("Los ingresos totales son mayores a los egresos totales!\n INGRESOS TOTALES: $" + ingresosTotales + "\n EGRESOS TOTALES: $" + egresosTotales);
        break;
    case 0:
        alert("La cantidad de ingresos totales y egresos totales son iguales!\n INGRESOS TOTALES: $" + ingresosTotales + "\n EGRESOS TOTALES: $" + egresosTotales);
        break;
    case -1:
        alert("Los egresos totales son mayores a los ingresos totales!\n INGRESOS TOTALES: $" + ingresosTotales + "\n EGRESOS TOTALES: $" + egresosTotales);
        break;
    default:
        alert("Ocurrio un error!");
}
