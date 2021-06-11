let personalityDB = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
    ];

let valueName = ['Иван', 'Пётр'];


function filtArrWithObj( obj, key, value) {
    let newObj = obj.filter( (i) => value.includes( i[key] ) );
    // console.info( newObj );
    return newObj;
}

const newArr = filtArrWithObj (personalityDB, 'name', valueName );

console.log (newArr);

// @export default filtArrWithObj;