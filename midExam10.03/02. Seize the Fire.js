function solve (input) {
    let commands=input.shift().split('#');   // [ 'High = 89','Meduim = 53','Low = 28','Medium = 77','Low = 23' ]
    let water=Number(input.shift());      //1250
    let effort=0;
    let totalFire=0;

    console.log('Cells: ');
    for (let i = 0; i < commands.length; i++) {
        let tokens=commands[i].split(' = ');      // [ 'High', '89' ]
        let command=tokens[0];                    // High
        let amount=Number(tokens[1]);             // 89
        if(command==='High' && amount>=81 && amount<=125){
            if(water-amount>=0){
                water-=amount;
                effort+=amount*0.25;
                totalFire+=amount;
                console.log(` - ${amount}`);
            }
        }
        if(command==='Medium' && amount>=51 && amount<=80){
            if(water-amount>=0){
                water-=amount;
                effort+=amount*0.25;
                totalFire+=amount;
                console.log(` - ${amount}`);
            }
        }
        if(command==='Low' && amount>=1 && amount<=50){
            if(water-amount>=0){
                water-=amount;
                effort+=amount*0.25;
                totalFire+=amount;
                console.log(` - ${amount}`);
            }
        }
    }
    console.log(`Effort: ${effort.toFixed(2)}`);
    console.log(`Total Fire: ${totalFire}`)
}
solve([ 'High = 89#Meduim = 53#Low = 28#Medium = 77#Low = 23',
'1250' ]);