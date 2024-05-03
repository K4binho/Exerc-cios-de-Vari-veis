/*M = c(1 + i)^t
M: montante (o capital acrescido dos juros, ou seja, Capital + Juros)
c: capital (valor inicial de uma dívida, empréstimo ou investimento)
i: taxa fixa de juros (expressa em decimal na fórmula, ou seja, o valor da taxa dividido por 100)
t: período de tempo

c = 1000
i = 0,125
t = 5
*/

let c = 1000;
let i = 0.125;
let t = 5;
let m;

m = c * Math.pow((1 + i), t);//M = 1802
m = m.toFixed();
console.log(m);