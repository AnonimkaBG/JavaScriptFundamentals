function solve (word,text) {
    
    let someTextArr=text.toLowerCase().split(' ');
    let result='';
    
    someTextArr.forEach((element)=>{
        if(element===word){
            result=word;
        }
    })
    if(result.length==0){
        console.log(`${word} not found!`);
    }else{
        console.log(word);
    }
}
solve('python',
'JavaScript is the best programming language');