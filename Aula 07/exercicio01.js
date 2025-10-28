/*
    Crie uma função dividir(a, b) que lance um erro se b === 0.
    Capture o erro e mostre uma mensagem amigável.
*/

class CustomError {
  message;
  code;
  constructor(message, code) {
    this.message = message;
    this.code = code;
  }
}

function dividir(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new CustomError("Um dos elementos não é um número!", "type");
  }
  if (b === 0) {
    throw new CustomError("Não é possível dividir por zero!", "math");
  }
  return a / b;
}

try {
  console.log(dividir(2, 0));
} catch (error) {
  console.log(error.message);
  console.log(error.code);
}
