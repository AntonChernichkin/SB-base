
function square (x1, y1, x2, y2) {
    let a = Math.max(x1, x2) - Math.min(x1, x2);
    let b = Math.max(y1, y2) - Math.min(y1, y2);
    let S = a*b;
    return S;
}

const test1 = square (2, 3, 10, 5);
console.log(test1);

const test2 = square (10, 5, 2, 3);
console.log(test2);

const test3 = square (-5, 8, 10, 5);
console.log(test3);

const test4 = square (5, 8, 5, 5);
console.log(test4);

const test5 = square (8, 1, 5, 1);
console.log(test5);
