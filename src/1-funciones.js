// crear un programa que reciba dos argumentos y genere un numero aleatorio entre esos dos valores. si no me pasan los argumentos entonces por defecto usare el valor del 1 al 100
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const argumentos = process.argv.splice(2);
console.log(argumentos);

let min = 1;
let max = 100;

if (argumentos.length !== 0) {
  const minParseado = parseInt(argumentos[0]);
  const maxParseado = parseInt(argumentos[1]);

  if (!isNaN(minParseado) && !isNaN(maxParseado)) {
    min = minParseado;
    max = maxParseado;
    // console.log(
    //   "El numero aleatorio creado es: ",
    //   getRandomIntInclusive(min, max)
    // );
  } else {
    console.log(
      "No se pudo usar los números ingresados por el usuario, en su lugar crearemos el numero con valores del 1 al 100"
    );
  }
}

console.log("El numero aleatorio creado es: ", getRandomIntInclusive(min, max));
