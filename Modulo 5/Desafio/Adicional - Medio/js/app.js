const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", calcularPresupuesto);

function calcularPresupuesto() {
    const ingresos = Number(document.getElementById("ingresos").value);

    const porcentajeNecesarios = Number(document.getElementById("porcentajeNecesarios").value);
    const porcentajePersonales = Number(document.getElementById("porcentajePersonales").value);
    const porcentajeAhorro = Number(document.getElementById("porcentajeAhorro").value);

    const resultadoNecesarios = document.getElementById("resultadoNecesarios");
    const resultadoPersonales = document.getElementById("resultadoPersonales");
    const resultadoAhorro = document.getElementById("resultadoAhorro");
    const mensaje = document.getElementById("mensaje");

    const totalPorcentajes = porcentajeNecesarios + porcentajePersonales + porcentajeAhorro;

    if (ingresos <= 0) {
        limpiarResultados();
        mensaje.textContent = "Ingrese un monto de ingresos válido.";
        mensaje.className = "error";
        return;
    }

    if (totalPorcentajes !== 100) {
        limpiarResultados();
        mensaje.textContent = "La suma de los porcentajes debe ser igual a 100%.";
        mensaje.className = "error";
        return;
    }

    const gastosNecesarios = ingresos * porcentajeNecesarios / 100;
    const gastosPersonales = ingresos * porcentajePersonales / 100;
    const ahorro = ingresos * porcentajeAhorro / 100;

    resultadoNecesarios.textContent = "Gastos necesarios: $" + gastosNecesarios;
    resultadoPersonales.textContent = "Gastos personales: $" + gastosPersonales;
    resultadoAhorro.textContent = "Ahorro: $" + ahorro;

    mensaje.textContent = "";
}

function limpiarResultados() {
    document.getElementById("resultadoNecesarios").textContent = "";
    document.getElementById("resultadoPersonales").textContent = "";
    document.getElementById("resultadoAhorro").textContent = "";
}