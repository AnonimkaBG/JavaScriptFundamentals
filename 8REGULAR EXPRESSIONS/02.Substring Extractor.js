function solve (substring,text) {
    let pattern=new RegExp(substring,'gi');
    let r='';
    let textArr=text.split(' ');
    for (let i = 0; i < textArr.length; i++) {
        let currentWord=textArr[i];
        if(currentWord.toLowerCase().includes(substring.toLowerCase())){
            textArr.splice(i,1);
            i--;
        }  
    }
    for (let i = 0; i < textArr.length; i++) {
        console.log(`idx[${i}] -> ${textArr[i]}`)
    }
}
solve('wel','Welcome to the Software University!');