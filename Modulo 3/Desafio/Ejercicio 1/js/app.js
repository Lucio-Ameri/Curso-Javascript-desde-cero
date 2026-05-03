let egresosTotales = 0;
let ingresosTotales = 0;

for(let i = 0; i < flujoDeCaja.length; i++){
    egresosTotales += flujoDeCaja[i].egreso;
    ingresosTotales += flujoDeCaja[i].ingreso;
}

if(ingresosTotales > egresosTotales){
    alert("Los ingresos totales son mayores a los egresos totales!\n INGRESOS TOTALES: $" + ingresosTotales + "\n EGRESOS TOTALES: $" + egresosTotales);
}
else if(egresosTotales > ingresosTotales){
    alert("Los egresos totales son mayores a los ingresos totales!\n INGRESOS TOTALES: $" + ingresosTotales + "\n EGRESOS TOTALES: $" + egresosTotales);
}

else{
    alert("La cantidad de ingresos totales y egresos totales son iguales!\n INGRESOS TOTALES: $" + ingresosTotales + "\n EGRESOS TOTALES: $" + egresosTotales);
}