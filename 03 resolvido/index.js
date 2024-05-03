/*
Você deseja comprar um tênis novo, porém, está com o dinheiro do mês contado e te sobrará somente R$ 80,00 para comprá-lo

O tênis custa R$ 129,99 porém um amigo seu trabalha na loja e consegue te dar um cupom de desconto
a única coisa que ele precisa é saber quanto por cento de desconto você necessita.

|  a  |  b  |   a / d      100    129,99
| :-: | :-: | =         =   
|  c  |  d  |   c / b      c       80,00
*/

let a = 100; // valor total do produto sem desconto
let b = 129.99; // valor do item
let c;//valor de desconto
let d = 80; // meu dinheiro

c = a * d;
c = c / b;
console.log(`O valor de desconto nescessário é de ${c.toFixed(2)}%`);