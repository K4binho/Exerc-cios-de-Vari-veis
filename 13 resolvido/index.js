/*
Faça um programa que calcula a área total de um cilindro a partir do raio da sua base e da sua altura.
Área da base - Ab = p.r²,Ab: área da base, p (número pi): 3,14, r: raio

Área lateral - Al = 2p. r. h, Al = área lateral, r = raios dos círculos, h = altura, p (número pi) = 3,14

Área total - At= 2.Ab + Al ou At = 2(p.r²) + 2(p.r.h), At: área total, Ab: área da base, Al: área lateral
p (número pi): 3,14
r: raio
h: altura

 Seja um cilindro com altura de 34 cm e raio da base igual a 2 cm. Calcule a área total do cilindro.
*/
let r = 2; //raio cm
let h = 34; //altura cm
let p = Math.PI; // pi

let Ab;//area base
let Al;//area lateral
let At;//area total

let Abm;//area base metros
let Alm;//area lateral metros
let Atm;//area total metros

//Ab = p.r² area base
Ab = p * Math.pow(r, 2);
Abm = Ab / 100;
console.log(`A área base é igual a ${Ab.toFixed(5)} cm ou ${Abm.toFixed(3)} Metros.`);

//Al = 2p. r. h area latela 
Al = 2 * p * r * h;
Alm = Al / 100;
console.log(`A área lateral é igual a ${Al.toFixed(5)} cm ou ${Alm.toFixed(3)} Metros.`);

//Área total - At= 2.Ab + Al ou At = 2(p.r²) + 2(p.r.h)
At = 2 * Ab + Al;
Atm = At / 100;
console.log(`A área Total é igual a ${At.toFixed(5)} cm ou ${Atm.toFixed(3)} Metros.`);
