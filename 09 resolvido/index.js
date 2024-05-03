//Calcule o valor de cada ângulo do quadrilátero seguinte:
// https://static.escolakids.uol.com.br/conteudo_legenda/460f67f820a78f732d55395e1932a031.jpg

//S = (n – 2)·180
let n = 4; //numero de lados 
let s;//graus
let l = 120; // angulos iguais 
let x; // lados e soma dos angulos
let x1;
let x2;

//valor de S
console.log("o quadrilátero tem seus angulos iguais a 4x, 2x, 4x e 2x. calcule seus valores.")
s = (n - 2) * 180; //calculo no angulo s em graus
console.log(`S é igual a ${s}°`);// angulo 360° 

//soma dos ângulos internos da figura e iguale o resultado a de s:
x = 2 + 4 + 2 + 4;//4 lados 4 angulos
x = s / x;
console.log(`X é igual a ${x}º`);

//substituir os angulos e descobrir seus valores
x1 = 4 * x;
x2 = 2 * x;
console.log(`Os angulos são iguais a ${x1}º e ${x2}º`);