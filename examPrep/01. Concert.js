function solve (input) {
    let lastBandToPrint=input.pop();
    let totalTime=0;
    let bands=new Map();
    let bandsPlayTime=new Map();

    for (let i = 0; i < input.length; i++) {
        if(input[i]==='start of concert'){
            break;
        }
        let entries=input[i].split('; ');          // [ 'Play', 'The Beatles', '2584' ] 
        let command=entries[0];                    //  Play
        let bandName=entries[1];                   // The Beatles
        if(command==='Add'){
            let members=entries[2].split(', ');                // [John Lennon, Paul McCartney, George Harrison, Ringo Starr ]
            if(bands.has(bandName)){
                let existingBand=bands.get(bandName);       // [ 'Brian Jones', 'Mick Jagger', 'Keith Richards' ]
                for (const member of members) {
                    if(!existingBand.includes(member)){
                        existingBand.push(member);
                        bands.set(bandName,existingBand);
                    }else{
                        bands.set(bandName,existingBand);
                    }
                }
            }else{
                bands.set(bandName,members);
            }
        }else if(command==='Play'){
            let playTime=Number(entries[2]);               // 2584
            totalTime+=playTime;
            if(bandsPlayTime.has(bandName)){
                let currentTime=bandsPlayTime.get(bandName);
                bandsPlayTime.set(bandName,playTime+currentTime);
            }else{
                bandsPlayTime.set(bandName,playTime);
            }
        }
    }
    let sortable=[...bandsPlayTime];
    let sortetTime=sortable.sort((a,b)=> b[1]-a[1] || a[0].localeCompare(b[0]));
     console.log(`Total time: ${totalTime}`);
    for (let [key,value] of sortetTime) {
     console.log(`${key} -> ${value}`); 
     }
     console.log(`${lastBandToPrint}`);
     let members=bands.get(lastBandToPrint);
     for (const member of members) {
         console.log(`=> ${member}`);
     }
}
solve([ 'Add; The Beatles; John Lennon, Paul McCartney',
'Add; The Beatles; Paul McCartney, George Harrison',
'Add; The Beatles; George Harrison, Ringo Starr',
'Play; The Beatles; 3698',
'Play; The Beatles; 3828',
'start of concert',
'The Beatles' ]);