const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", calcularPresupuesto);

function calcularPresupuesto() {
    const ingresos = Number(document.getElementById("ingresos").value);

    const necesarios = document.getElementById("necesarios");
    const personales = document.getElementById("personales");
    const ahorro = document.getElementById("ahorro");
    const mensaje = document.getElementById("mensaje");

    if (ingresos <= 0) {
        necesarios.textContent = "";
        personales.textContent = "";
        ahorro.textContent = "";
        mensaje.textContent = "Ingrese un monto válido.";
        mensaje.className = "error";
        return;
    }

    const gastosNecesarios = ingresos * 0.50;
    const gastosPersonales = ingresos * 0.30;
    const montoAhorro = ingresos * 0.20;

    necesarios.textContent = "Gastos necesarios 50%: $" + gastosNecesarios;
    personales.textContent = "Gastos personales 30%: $" + gastosPersonales;
    ahorro.textContent = "Ahorro 20%: $" + montoAhorro;

    mensaje.textContent = "";
}