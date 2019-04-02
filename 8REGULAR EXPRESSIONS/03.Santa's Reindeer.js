function solve (text) {
    let textArr=text.split(' ');
    let removed=[];

    for (let i = 0; i < textArr.length; i++) {
        let currentWord=textArr[i];
        if(currentWord.startsWith('*') && currentWord.endsWith('*') && currentWord.slice(2) === currentWord.slice(2).toLowerCase()){
             removed.push(textArr.splice(i,1));
             i--;
        }
    }
    console.log(removed.join(', '));
    console.log('*'.repeat(20));
    console.log(textArr.join(' '));
}
solve("Oh my *Rudolf* dwarfs! This *Dasher* year's christmas *Prancer is about to be Comet* ruined because Santa has lost his deer and.");