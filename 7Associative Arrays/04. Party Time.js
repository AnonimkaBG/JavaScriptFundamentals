function solve(arr) {
    let partyList = []
    for (let i = 0; i < arr.length; i++) {
        let currentWord = arr[i];
        if (currentWord === 'PARTY') {
            break;
        }
        partyList.push(currentWord)
    }
 
    arr = arr.slice(partyList.length + 1)
    for (let i = 0; i < arr.length; i++) {
        let currentWord = arr[i];
        if (partyList.includes(currentWord)) {
            let index = partyList.indexOf(currentWord)
            partyList.splice(index, 1)
        }
    }
    partyList = partyList
        .filter(x => Number.isInteger(+x[0]))
        .concat(partyList.filter(x => !Number.isInteger(+x[0])))
 
    console.log(partyList.length)
    console.log(partyList.join("\n"))
}
solve(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc', 
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]);