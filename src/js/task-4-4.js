let arr = [],
    arrDay = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

for (let i = 0; i < 31; i++) {
    arr.push(i+1);
    console.log(`${arr[i]} января, ${arrDay[i%7]}`);
}
// console.log(arr);

// console.log(8%7);

