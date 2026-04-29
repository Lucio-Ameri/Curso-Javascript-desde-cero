const costoBase = 1.16;
let factorMultiplicador = 1.21;
let metrosCuadrados = prompt("Ingrese los metros cuadrados de su hogar:");

metrosCuadrados = parseFloat(metrosCuadrados);

let resultado = costoBase * factorMultiplicador * metrosCuadrados;
alert("El costo base por metro cuadrado es de $" + resultado.toFixed(2));
