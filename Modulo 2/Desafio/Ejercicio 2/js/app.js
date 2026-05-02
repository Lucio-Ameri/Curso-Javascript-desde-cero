const usuarioValido = "admin";
const contraseñaValida = "1234";
let usuario, contraseña;

usuario = prompt("Ingrese el nombre de usuario: ");
contraseña = prompt("Ingrese la contraseña del usuario: ");

if((usuario === usuarioValido) && (contraseña === contraseñaValida)){
    alert("Bienvenido Administrador!");
}
else{
    alert("Nombre de usuario o Contraseña incorrecta!");
}