// const n = 0,
//       m = 100;

const n = 2,
      m = 5;

// const n = 100,
//       m = -5;

// const n = -3,
//       m = -10;

let a = Math.min(m, n),
    b = Math.max(m, n);
// console.log(Math.max(m, n));
// console.log(Math.min(m, n));

function getRandomInRange(a, b) {
        return Math.floor(Math.random() * (Math.max(a, b) - Math.min(a, b)) + Math.min(a, b)); 
  }


let c;

do {
    c = getRandomInRange(a, b);
} while (c%2 === 0);

console.log(c);
