function solve (input) {
    let script=input.shift().split('');    // wkhfn#|rx#jhqfkr#phf#exw#|rxu#uholf#lv#khfgohg#lq#hfrwkhu#sohfhw
    let substring=input.shift().split(' '); // ec an
    let oldWord=substring[0];
    let newWord=substring[1];
    let re=/[d-z{}|#]+/g;
    let valid=true;
    let ready=true;
    for (let i = 0; i < script.length; i++) {
        let currentChar=script[i];
        let newChar='';
        if(currentChar.match(re)){
            newChar=String.fromCharCode(currentChar.charCodeAt(currentChar)-3);
            script[i]=newChar;
        }else{
            console.log('This is not the book you are looking for.');
            valid=false;
            break;
        }
    }
    let result=script.join('');
    let final=result.split(oldWord).join(newWord);
    if(valid){
        console.log(final);
    }
}
solve([ 'wkhfn#|rx#jhqfkr#phf#exw#|rxu#uholf#lv#khfgohg#lq#hfrwkhu#sohfhw',
'ec an' ]);
// solve([ 'arx#vkdww#qrw#sdvv', 't l' ]);