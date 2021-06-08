// const arr = [],
//       m = 100,
//       n = 0,
//       count = 100;

// const arr = [],
//       m = 5,
//       n = 2,
//       count = 50;

// const arr = [],
//       m = -5,
//       n = 100,
//       count = 70;

const arr = [],
      m = -10,
      n = -3,
      count = 42;

    // console.log(Math.max(m, n));
    // console.log(Math.min(m, n));
    // console.log(arr.push(30));
    
function getRandomInRange(a, b) {
        // let a = Math.min(m, n),
        //     b = Math.max(m, n);
        return Math.floor(Math.random() * (Math.max(a, b) - Math.min(a, b)) + Math.min(a, b)); 
  }

for (let i = 0; i < count; i++) {
    arr.push(getRandomInRange(n, m));
}

console.log(arr);
