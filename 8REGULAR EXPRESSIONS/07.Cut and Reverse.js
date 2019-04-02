function solve (text) {
    console.log(text.substr(0,text.length/2).split('').reverse().join(''));
    console.log(text.substr(text.length/2,text.length).split('').reverse().join(''));
}
solve('tluciffiDsIsihTgnizamAoSsIsihT');