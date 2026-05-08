const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", calcularPuntoEquilibrio);

function calcularPuntoEquilibrio() {
    const costosFijos = Number(document.getElementById("costosFijos").value);
    const precioVenta = Number(document.getElementById("precioVenta").value);
    const costoVariable = Number(document.getElementById("costoVariable").value);

    const resultado = document.getElementById("resultado");

    if (costosFijos <= 0 || precioVenta <= 0 || costoVariable < 0) {
        resultado.textContent = "Ingrese valores válidos.";
        resultado.className = "error";
        return;
    }

    const margenContribucion = precioVenta - costoVariable;

    if (margenContribucion <= 0) {
        resultado.textContent = "El precio de venta debe ser mayor al costo variable.";
        resultado.className = "error";
        return;
    }

    const puntoEquilibrio = costosFijos / margenContribucion;

    resultado.textContent = "El punto de equilibrio es de " + Math.ceil(puntoEquilibrio) + " unidades.";
    resultado.className = "correcto";
}