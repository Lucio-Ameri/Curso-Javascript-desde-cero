const costoBase = 1.16;

const selectPropiedad = document.querySelector("#propiedad");
const selectUbicacion = document.querySelector("#ubicacion");
const inputMetrosCuadrados = document.querySelector("#metros2");
const valorPoliza = document.querySelector("#valorPoliza");
const botonCotizador = document.querySelector("button");

function obtenerMultiplicador(array, selector){
    const encontrado = array.find((elemento) => elemento.multiplicador == selector);

    return encontrado.multiplicador;
}

function cargarOpcionesDePropiedades(){
    let opciones = `<option selected disabled value="">...</option>`;

    datosPropiedad.forEach((propiedad) => {
        opciones += `<option value="${propiedad.multiplicador}">${propiedad.tipo}</option>`;
    })

    selectPropiedad.innerHTML = opciones;
}

function cargarOpcionesDeUbicacion(){
    let opciones = `<option selected disabled value="">...</option>`;

    datosUbicacion.forEach((ubicacion) => {
        opciones += `<option value="${ubicacion.multiplicador}">${ubicacion.tipo}</option>`;
    })

    selectUbicacion.innerHTML = opciones;
}

function cotizarPoliza(){
    const fmPropiedad = obtenerMultiplicador(datosPropiedad, selectPropiedad.value);
    const fmUbicacion = obtenerMultiplicador(datosUbicacion, selectUbicacion.value);
    const metrosCuadrados = parseInt(inputMetrosCuadrados.value);

    if(isNaN(fmPropiedad) || isNaN(fmUbicacion) || isNaN(metrosCuadrados)){
        alert("Debe completar todos los campos correctamente!");
        return;
    }

    if(metrosCuadrados < 20 || metrosCuadrados > 500){
        alert("Debe ingresar una cantidad de metros cuadrados entre [20; 500]!");
        return
    }

    const resultado = ((costoBase * metrosCuadrados) * parseFloat(fmPropiedad)) * parseFloat(fmUbicacion); 
    valorPoliza.textContent = resultado.toFixed(2);
}

cargarOpcionesDePropiedades();
cargarOpcionesDeUbicacion();

botonCotizador.addEventListener("click", cotizarPoliza);
