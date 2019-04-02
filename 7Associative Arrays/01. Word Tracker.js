function solve (input) {
    let words=input.shift().split(' ');
    let result=new Map();

    for (const word of words) {
        result.set(word,0);
    }
    for (const word of input) {
        if(result.has(word)){
            let value=result.get(word)+1;
            result.set(word,value);
        }
    }
    let output=[...result.entries()];
    output.sort((a,b)=>b[1]-a[1]);
    for (const [word,count] of output) {
        console.log(`${word} - ${count} `);
    }
}
solve(['this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
,'words','this','and','sentence','because','this','is','your','task']);