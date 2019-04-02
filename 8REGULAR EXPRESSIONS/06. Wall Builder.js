function solve (input) {
    let regexBase = new RegExp(/^[A-Z]+([A-Z]+|\d{4,})*\d{4,}$/);
    for (let i = 0; i < input.length / 3; i++) {
        console.log(regexBase.test(input[i]) ? 'SOLID BASE!' : 'WEAK BASE!');
    }
    let regexMiddle = new RegExp(/^[A-Za-z]{3,}[A-Za-z\%\$\#\@]*[\%\$\#\@]+$/);
    for (let i = input.length / 3; i < input.length / 3 * 2; i++) {
        console.log(regexMiddle.test(input[i]) ? 'SOLID MIDDLE!' : 'WEAK MIDDLE!');
    }
    let regexTop = new RegExp(/^0+(0+|[a-z]{0,5})*0+[a-z]{0,5}$/);
    for (let i = input.length / 3 * 2; i < input.length / 3 * 3; i++) {
        console.log(regexTop.test(input[i]) ? 'SOLID TOP!' : 'WEAK TOP!');
    }
}
solve(['SO9000STRONG10000WALL7000', 'YES345345345PLEASEHAHA999999',
'xaXAxa###MiDDlE%%$##', 'mMmMm%%%%ImRichGuy$$$$$',
'00000cant0do000that', '0sorry00happy000sad']);