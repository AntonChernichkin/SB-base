const selectOptionDB = [{
    value: '0',
    label: 'Первое значение'
}, {
    value: '1',
    label: 'Второе значение'
}, {
    value: '2',
    label: 'Третье значение'
}];

const tratata = [1, 2, 'три', 'четыре'];



function addSelectList (a, Value) {
    const select = document.createElement('select');
    
    document.body.prepend(select);
    
    function filtArrWithObj( obj, Value = '0') {
        let b = obj.filter( (num) => Value.includes( num['value'] ) );
        // console.info( newObj );
    
        return b;
    }

    const b = filtArrWithObj(a, Value);

    b.forEach((item) => {
        const option = document.createElement('option');
        // let keys = Object.keys(item);
        // let values = Object.values(item);
        let entries = Object.entries(item);
    
        for (let [key, value] of entries) {
            // console.log(key);
            // console.log(value);
            if (key == 'value') {
                option.value = value;
            } else if (key == 'label') {
                option.label = value;
            }
        }
        select.append(option);    
    });
}

addSelectList(selectOptionDB, ['0', '1']);
addSelectList(selectOptionDB, ['2']);
// addSelectList(tratata);


