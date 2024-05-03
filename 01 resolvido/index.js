//IMC = Peso ÷ (Altura × Altura)
let peso = 76;
let altura = 1.79;
let imc;

altura = altura * altura;

imc = peso / altura;
imc = imc.toFixed(2); //arredondar valor

console.log(`O IMC de fulado é ${imc} `);