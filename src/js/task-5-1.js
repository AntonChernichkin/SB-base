// const emailMain = ['a@gmail.com', 'b@gmail.com', 'c@gmail.com', 'd@gmail.com'];
// const emailBlackList = ['a@gmail.com', 'c@gmail.com'];

// function trueEmailList (arr1, arr2) {
//     const arr3 = [];
    
    
//     for (let i=0; i < arr1.length; i++) {
//         // console.log(arr1[i]);
//         arr2.forEach( item => {
//             if (arr1[i] != item) {
//                 arr3.push(arr1[i]);
//             }
//         });
//     }
//     return arr3;
    
// }

// console.log(trueEmailList (emailBlackList, emailMain));


const emailMain = ['a@gmail.com', 'ac@gmail.com', 'b@gmail.com', 'c@gmail.com', 'd@gmail.com'];
const emailBlackList = ['a@gmail.com', 'c@gmail.com'];

function trueEmailList (arr1, arr2) {
    let difference = emailMain.filter(num => !emailBlackList.includes(num));
    return difference;
}

const a = trueEmailList(emailMain, emailBlackList);

console.log(a);

// for (let i = 0; i < emailMain.length; i++) {
//     console.log(emailMain[i]);

//     // emailBlackList.forEach(item => {
//     //     console.log(item);
//     //     if (!(emailMain[i] == item)) {
//     //         console.log('Done!');
//     //     }
//     // });
//     for (let value of emailBlackList) { 
//         console.log(value);
//         if ((emailMain[i] != value)) {
//             console.log('Done!');
//             break;
//         }
//     }
// }
