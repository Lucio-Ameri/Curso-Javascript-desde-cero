const validador = 18;
let edad = prompt("Ingrese su edad (Recuerde que tiene que ser mayor a 18 años): ");

if(Number.parseInt(edad) > validador){
    alert("Bienvenido!")
}
else{
    alert("ERROR: usted no es mayor de edad.")
}
