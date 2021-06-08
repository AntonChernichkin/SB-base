const roadMines = [true, true, true, true, true, true, true, true, true, true];
// const roadMines = [true, false, false, false, false, false, false, false, false, true];
// const roadMines = [false, false, false, true, false, false, false, false, false, false];
// const roadMines = [false, false, false, false, false, false, false, false, false, false];

let count = 0,
    dmg = 0;

for (let i = 0; i < roadMines.length; i++) {
    console.log(`танк переместился на ${i+1}`)
    if (roadMines[i] == true && dmg < 1) {
        console.log('танк повреждён');
        dmg++;
    } else if (roadMines[i] == true && dmg == 1) {
        console.log('танк уничтожен');
        dmg++;
        break;
    }
}

// roadMines.forEach( item, i => () {

// } 