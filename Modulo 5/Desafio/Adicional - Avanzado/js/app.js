const btnAgregar = document.getElementById("btnAgregar");
const btnCalcular = document.getElementById("btnCalcular");

let categorias = [];

btnAgregar.addEventListener("click", agregarCategoria);
btnCalcular.addEventListener("click", calcularPresupuesto);

function agregarCategoria() {
    const nombre = document.getElementById("nombreCategoria").value.trim();
    const porcentaje = Number(document.getElementById("porcentajeCategoria").value);
    const mensaje = document.getElementById("mensaje");

    if (nombre === "") {
        mensaje.textContent = "Ingrese el nombre de la categoría.";
        mensaje.className = "error";
        return;
    }

    if (porcentaje <= 0) {
        mensaje.textContent = "Ingrese un porcentaje válido.";
        mensaje.className = "error";
        return;
    }

    categorias.push({
        nombre: nombre,
        porcentaje: porcentaje
    });

    mostrarCategorias();

    document.getElementById("nombreCategoria").value = "";
    document.getElementById("porcentajeCategoria").value = "";
    mensaje.textContent = "";
}

function mostrarCategorias() {
    const listaCategorias = document.getElementById("listaCategorias");

    listaCategorias.innerHTML = "";

    for (let i = 0; i < categorias.length; i++) {
        const item = document.createElement("li");

        item.textContent = categorias[i].nombre + " - " + categorias[i].porcentaje + "%";

        listaCategorias.appendChild(item);
    }
}

function calcularPresupuesto() {
    const ingresos = Number(document.getElementById("ingresos").value);
    const resultado = document.getElementById("resultado");
    const mensaje = document.getElementById("mensaje");

    resultado.innerHTML = "";
    mensaje.textContent = "";

    if (ingresos <= 0) {
        mensaje.textContent = "Ingrese un monto de ingresos válido.";
        mensaje.className = "error";
        return;
    }

    if (categorias.length === 0) {
        mensaje.textContent = "Debe agregar al menos una categoría.";
        mensaje.className = "error";
        return;
    }

    let sumaPorcentajes = 0;

    for (let i = 0; i < categorias.length; i++) {
        sumaPorcentajes += categorias[i].porcentaje;
    }

    if (sumaPorcentajes !== 100) {
        mensaje.textContent = "La suma de los porcentajes debe ser igual a 100%. Actualmente suma " + sumaPorcentajes + "%.";
        mensaje.className = "error";
        return;
    }

    for (let i = 0; i < categorias.length; i++) {
        const monto = ingresos * categorias[i].porcentaje / 100;

        const parrafo = document.createElement("p");

        parrafo.textContent = categorias[i].nombre + ": $" + monto;

        resultado.appendChild(parrafo);
    }
}