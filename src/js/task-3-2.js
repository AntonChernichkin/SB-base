const surname = 'tiKhIY';
const name = "oLeG";

const trueName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
const trueSurname = surname.charAt(0).toUpperCase() + surname.slice(1).toLowerCase();
console.log(trueName);
console.log(trueSurname);

trueName === name && trueSurname === surname ? console.log('Имя осталось без изменений') : console.log('Имя было преобразовано');