function shortestAndLongestWord (string) {
    let sentence=string.split(' ').filter(x=>x!=='');
    let longestWord='';
    let shortestWord='sdaaaaaaaaaaaaaaaaaaaaaaaaaasdadsafdsfdsfdsfdsfdsdsadsadasdsadsadsadsadsadasdasdasdasdsa';
    for (let i = 0; i < sentence.length; i++) {
        if(sentence[i].length>longestWord.length){
            longestWord=sentence[i];
        }if(sentence[i].length<shortestWord.length){
            shortestWord=sentence[i];
        }
    }
    console.log(`Longest -> ${longestWord}`);
    console.log(`Shortest -> ${shortestWord}`);
}
shortestAndLongestWord('Hello people, are you familiar with the terms of application at the software university?');