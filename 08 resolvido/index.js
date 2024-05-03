//Faça um programa que a partir do raio de um círculo, calcula o circunferencia (C) e a área (Ao) deste círculo.
//https://www.estudopratico.com.br/wp-content/uploads/2014/11/area-de-uma-circunferencia.png
//Lembre-se que o DIÂMETRO de uma esfera é sempre o dobro do raio.

let raio = 5;
let circunferencia;
let area;
let diamentro;

circunferencia = 2 * Math.PI * raio;//calcular circunferencia
console.log(`a circunferencia é igual a ${circunferencia.toFixed(2)} cm^2`);

area = Math.PI * Math.pow(raio, 2); //calcular area
console.log(`A área é igual a ${area.toFixed(2)} cm^2 `);