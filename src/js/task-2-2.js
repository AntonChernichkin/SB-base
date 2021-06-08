// Для a = 13.123456789, b = 2.123, n = 5 дробные части: 12345, 12300.
// Для a = 13.890123, b = 2.891564, n = 2 дробные части: 89, 89.
// Для a = 13.890123, b = 2.891564, n = 3 дробные части: 890, 891.

const a = 13.123456789, 
      b = 2.123, 
      n = 5,
      c = (a - Math.floor(a)).toFixed(n)*Math.pow(10, n),
      d = (b - Math.floor(b)).toFixed(n)*Math.pow(10, n);

console.log(c);
console.log(d);
console.log(c > d);
console.log(c < d);
console.log(c >= d);
console.log(c <= d);
console.log(c === d);
console.log(c != d);


const a1 = 13.890123, 
      b1 = 2.891564, 
      n1 = 2,
      c1 = (a1 - Math.floor(a1)).toFixed(n1)*Math.pow(10, n1),
      d1 = (b1 - Math.floor(b1)).toFixed(n1)*Math.pow(10, n1);

console.log(c1);
console.log(d1);
console.log(c1 > d1);
console.log(c1 < d1);
console.log(c1 >= d1);
console.log(c1 <= d1);
console.log(c1 === d1);
console.log(c1 != d1);

const a2 = 13.890123, 
      b2 = 2.891564, 
      n2 = 3,
      c2 = (a2 - Math.floor(a2)).toFixed(n2)*Math.pow(10, n2),
      d2 = (b2 - Math.floor(b2)).toFixed(n2)*Math.pow(10, n2);

console.log(c2);
console.log(d2);
console.log(c2 > d2);
console.log(c2 < d2);
console.log(c2 >= d2);
console.log(c2 <= d2);
console.log(c2 === d2);
console.log(c2 != d2);