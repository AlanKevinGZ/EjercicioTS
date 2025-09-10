var hoy = new Date();
var edad = 0;
var nacimiento = new Date();
var calcularEdad = function (fechaNacimiento) {
    nacimiento = new Date(fechaNacimiento);
    edad = hoy.getFullYear() - nacimiento.getFullYear();
    return edad;
};
console.log(calcularEdad("1999-05-23"));
console.log(calcularEdad("2000-07-17"));
