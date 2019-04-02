function solve (input) {
    let result=new Map();
    for (const word of input) {
        let count=0;
        for(i = 0; i < input.length; i++){
            if(input[i] == word){
                count++;
            }
        }
        result.set(word,count);
    }
    let output=[...result.entries()];
    output.sort((a,b)=>b[1]-a[1]);
    for (const [word,count] of output) {
        console.log(`${word} -> ${count} times`);
    }
}       
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);