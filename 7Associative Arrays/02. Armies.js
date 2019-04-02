function solve (input) {
    let leaders={};
    
    for (let line of input) {                   // line == Rick Burr arrives
        if(line.includes(' arrives')){
            let leader = line.replace(' arrives', '');  // Rick Burr
            if (!leaders.hasOwnProperty(leader)) {
                leaders[leader] = {};
            }
        }else if (line.includes(':')) {
            let tokens = line.split(': ');
            let leader = tokens[0];
            let army = tokens[1].split(', ')[0];
            let count = Number(tokens[1].split(', ')[1]);
            if (leaders.hasOwnProperty(leader)) {
                leaders[leader][army] = count;
            }
        }else if (line.includes(' + ')) {
            let tokens = line.split(' + ');
            let army = tokens[0];
            let count = Number(tokens[1]);
            for (let leader in leaders) {
                if (leaders[leader][army] !== undefined) {
                    leaders[leader][army] += count;
                }
            }
        }else if (line.includes(' defeated')) {
            let leader = line.replace(' defeated', '');
            delete leaders[leader];
        }
    }

    for (let leader in leaders) {
        leaders[leader]['totalCount'] = 0;

        for (let army in leaders[leader]) {
            if (army !== 'totalCount') {
                leaders[leader]['totalCount'] += leaders[leader][army];
            }
        }
    }
    let sortedLeaders = Object.keys(leaders).sort((a, b) => leaders[b]['totalCount'] - leaders[a]['totalCount']);

    for (let leader of sortedLeaders) {
        console.log(`${leader}: ${leaders[leader].totalCount}`);
        let sortedArmy = Object.keys(leaders[leader]).filter(x => x !== 'totalCount').sort((a, b) => leaders[leader][b] - leaders[leader][a]);
        for (let army of sortedArmy) {
            console.log(`>>> ${army} - ${leaders[leader][army]}`)
        }
    }
}
solve(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 
'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 
'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 
'Rick Burr defeated', 'Porter: Retix, 3205']);

/* "{leader} arrives" – add the leader (no army)
"{leader}: {army name}, {army count}" – add the army with its count to the leader (if he exists)
"{army name} + {army count}" – if the army exists somewhere add the count
"{leader} defeated" – delete the leader and his army (if he exists) */
/*Porter: 58507
>>> Legion - 55302
>>> Retix - 3205
Findlay: 39040
>>> Britox - 39040*/