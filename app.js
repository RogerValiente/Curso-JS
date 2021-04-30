//Ciclo de ingresa tu nombre

// var nombre = "";

// while (nombre == "") {
//   nombre = prompt("Ingresa tu nombre");
//   console.log(nombre);

//   if (nombre === " ") {
//     break;
//   }
// }

//Ciclo de tu nombre con do while
let nombre = "";

do {
  nombre = prompt("Ingresa tu nombre");
  console.log(nombre);

  if (nombre === " ") {
    break;
  }
} while (nombre == "" || nombre == null || nombre >= 0);

//Ciclo de tu edad con do while

let edad = 1;

do {
  edad = parseInt(prompt("Ingresa tu edad"));
  console.log(edad);

  if (edad != 0 && edad >= 18) {
    alert(
      `Bienvenido ${nombre}, tu edad es: ${edad} años y eres mayor de edad`
    );
    break;
  } else if (edad != 0 && edad < 18) {
    alert(
      `Bienvenido ${nombre}, tu edad es: ${edad} años y eres menor de edad`
    );
    break;
  }
} while (edad !== 0);
