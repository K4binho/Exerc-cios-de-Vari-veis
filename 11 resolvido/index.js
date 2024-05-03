//volume de esfera cujo raio é de 3cm?(pi = 3.14)
//v = (4 * pi  * r^3)/3  //O volume de uma esfera de raio 3 é 36 PI

let raio = 7; //diametro = raio * 2;
let volume;

volume = 4 / 3 * Math.PI * Math.pow(raio, 3);

console.log(`O volume de uma esfera de raio ${raio} é ${volume.toFixed(1)} π`);