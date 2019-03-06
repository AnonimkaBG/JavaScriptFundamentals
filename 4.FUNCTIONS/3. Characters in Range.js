//Write a JS function that receives two characters and prints on a single line all the characters in between them according to the ASCII code.
function solve (char1,char2) {
    let a=char1.charCodeAt();
    let b=char2.charCodeAt();
    let result=[];
    if(a<b){
    for (let i = a+1; i < b; i++) {
        result.push(String.fromCharCode(i));
    }
    }else{
        for (let i = b+1; i < a; i++) {
            result.push(String.fromCharCode(i));
        }
    }
    console.log(result.join(' '));
}
solve('C',
'#');