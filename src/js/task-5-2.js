function actionPrice (price, numb, promo) {
    let aPrice = price*numb;
    
    if (promo == 'ДАРИМ300') {
        aPrice = 0;
    } else if (numb >= 10) {
        aPrice = aPrice*(0.95);
    } else if (aPrice >50000) {
        aPrice = (aPrice - 50000)*0.8 + 50000;
    } else if (promo == 'СКИДКА15' && aPrice >= 20000) {
        aPrice = aPrice * 0.85;
    } 

    return aPrice;
}


const a = actionPrice (200, 5, 'LOL');
console.log(a);
const b = actionPrice (200, 5, 'ДАРИМ300');
console.log(b);
const c = actionPrice (200, 10, 'LOL');
console.log(c);
const d = actionPrice (20000, 5, 'LOL');
console.log(d);
const e = actionPrice (200, 5, 'СКИДКА15');
console.log(e);
const f = actionPrice (20000, 2, 'СКИДКА15');
console.log(f);
