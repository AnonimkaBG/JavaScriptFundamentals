function solve (input) {
    
    let result=new Map();
    let neighborhoods=input
    .shift()
    .split(', ');   // [ 'Abbey Street', 'Herald Street', 'Bright Mews' ]
    neighborhoods.forEach(n => result.set(n,[]));
    
    for (const line of input) {
        let [neighborhood,name,]=line.split(' - '); // Bright Mews, Garry
        if(result.has(neighborhood)){
            let people =result.get(neighborhood);
            people.push(name);
            result.set(neighborhood,people);
        }
    }
    let output=[...result.entries()];
    output.sort((a,b)=>b[1].length-a[1].length);
    for (const [kvartal,hora] of output) {
        console.log(`${kvartal}: ${hora.length}`);
        for (const person of hora) {
            console.log(`--${person}`);
        }
    }
}
solve(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']);