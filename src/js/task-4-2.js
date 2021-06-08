const str = 'Привет, мир!';
let strNew = '',
    strLenght = str.length,
    p = str.length;

for (let i = 0; i < strLenght; i++) {
    // console.log(p);
    p--;
    strNew += str[p]; 
}
console.log(strNew);