function solve (text) {
    let pattern=/\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let match='';
    let result=[];
    while((match=pattern.exec(text))!==null){
        result.push(match[0]);
    }
    console.log(result.join(' '));
}
solve("Steven Son, Steven son, steven Son, STeven Son, Michael Braun, MichaelBraun");