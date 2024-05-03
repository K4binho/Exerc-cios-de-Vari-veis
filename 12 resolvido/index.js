/*
Faça um programa que calcula a taxa de juros que foi operada sobre um financiamento a partir do montate total que foi pago, do capital inicial que foi obtido como empréstimo e do tempo dexorrido do financiamento.

A fórmula (e um exemplo) que calcula essa taxa segue abaixo:

![Fórmula de juros compostos](https://i.pinimg.com/originals/28/31/2b/28312bc3516cd030c7f27edb4c293e6a.png)

Imprima a taxa de juros com uma mensagem seguindo o formato a seguir (substituindo C, i, M e n por números):

"O seu financiamento de C reais teve uma taxa de juros de i%, pois após n meses você teve que pagar M reais."
*/

let c = 60_000; //capital
let i; //taxa de juros
let m = 90_000; //montante
let n = 24; //numero de peridos

i = m / c;
i = Math.pow(i, 1 / n) - 1;
i = i * 100;
i = i.toFixed(3)
console.log(`O seu financiamento de ${c} mil reais teve uma taxa de juros de ${i}%, pois após ${n} meses você teve que pagar ${m} mil reais.`);