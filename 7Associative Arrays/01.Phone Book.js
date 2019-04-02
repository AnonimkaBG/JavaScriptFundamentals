function solve (input) {
    let arr={};
    for (let string of input) {
        let [name,number]=string.split(' ');
        arr[name]=number;
    }
    for (let key in arr) {
        console.log(`${key} -> ${arr[key]}`);
    }
}
solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);