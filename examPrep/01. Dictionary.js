function solve (input) {
    let words=input.splice(1,1);     // [ 'Pesho', 'Gosho' ]
    words=words[0].split(' | ');
    let list={};
    let inputArr=input[0].split(' | ');
    let command=input.pop();
    for (let i = 0; i < inputArr.length; i++) {
        let word=inputArr[i].split(': ')[0];      // programmer
        let definition=inputArr[i].split(': ')[1]; // an animal, which turns coffee into code
        if(!list.hasOwnProperty(word)){
            list[word]=[];
        }
        list[word].push(definition);
    }
    for (const word of words) {
        if(list.hasOwnProperty(word)){
            console.log(word);
            list[word].sort((a,b)=>b.length-a.length)
            .forEach(def=>{
                console.log(` -${def}`)});
        }
    }
    if(command==='List'){
        let keys=Object.keys(list);
        keys.sort((a,b)=>a.localeCompare(b));
        console.log(keys.join(' '));
    }
}
// solve([ 'programmer: an animal, which turns coffee into code | developer: a magician',
// 'Pesho | Gosho',
// 'List' ]
// );
solve([ 'tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance',
'bit | code | tackle',
'End' ]);