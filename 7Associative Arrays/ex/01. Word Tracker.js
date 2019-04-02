function solve (input) {
    let searchedWords=input.shift().split(' ');  //[ 'this', 'sentence' ] 
    let result={};
    
    for (let word of searchedWords) {
        let count=0;
        for (let line of input) {
            if(word===line){
                if(!result.hasOwnProperty(word)){
                    count++;
                    result[word]=count;
                }else{
                    count++;
                    result[word]=count;
                }
            }
        }
    }
    let sortedResult=Object.entries(result).sort((a,b)=>b[1]-a[1]);
    for (let i = 0; i < sortedResult.length; i++) {
        console.log(`${sortedResult[i][0]} - ${sortedResult[i][1]}`);
    }
}
solve(['this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
,'words','this','and','sentence','because','this','is','your','task']);    