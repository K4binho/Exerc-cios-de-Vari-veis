//d = \sqrt{(1 - 1)^2 + (4 - 1)^2} \ d = \sqrt{(0)^2 + (3)^2} \ d = \sqrt{9} \ d = 3
//https://i.imgur.com/vbKcS7g.png (x1, y1) e (x2, y2) 

let d, x1 = 1, x2 = 4, y1 = 1, y2 = 1;

d = Math.sqrt(Math.pow((x1 - y1), 2) + Math.pow((x2 - y2), 2));
console.log(d);