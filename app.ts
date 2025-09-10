const hoy: Date = new Date();
let edad: number = 0;
let nacimiento: Date = new Date();

const calcularEdad = (fechaNacimiento: string): number => {
   nacimiento= new Date(fechaNacimiento);
   edad = hoy.getFullYear() - nacimiento.getFullYear();

  return edad;
};


console.log(calcularEdad("1999-05-23")); 
console.log(calcularEdad("2000-07-17")); 