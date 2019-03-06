function towns (input) {
    let headings=input.shift().split(' ').filter(a=>!a.includes('|')); //[ 'Town', 'Latitude', 'Longitude' ]
    let output=[];
    
    for (let i = 0; i < input.length; i++) {
        let current=input[i].split(' ').filter(a=>!a.includes('|'));
        let result={};
        result[headings[0]]=current[0];
        result[headings[1]]=+Number(current[1]).toFixed(2);
        result[headings[2]]=+Number(current[2]).toFixed(2);
        output.push(result);
        result={};
    }
    console.log(JSON.stringify(output));
}
towns(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);

// [{"Town":"Sofia","Latitude":42.70,"Longitude":23.33},
// {"Town":"Beijing","Latitude":39.91,"Longitude":116.36}]
