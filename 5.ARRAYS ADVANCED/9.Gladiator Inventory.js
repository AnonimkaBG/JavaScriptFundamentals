function inventory (input) {
    let inventory=[];
    inventory.push(input.shift().split(' '));
    let result=inventory.shift();
    let upgrade=[];
    for (let i = 0; i < input.length; i++) {
        let tokens=input[i].split(' ').filter(x=>x!==''); //[ 'Buy', 'Bag' ]
        let command=tokens[0];                            //Buy
        switch(command){
            case 'Buy': if(!result.includes(tokens[1])){
                result.push(tokens[1]); }
                break;
            case 'Trash': if(result.includes(tokens[1])){
                result.splice(result.indexOf(tokens[1]),1);}
            break;
            case 'Repair': if(result.includes(tokens[1])){
                let repair=result.splice(result.indexOf(tokens[1]),1);
                result.push(repair.toString()); }
                break;
            case 'Upgrade': upgrade=tokens[1].split('-'); //[ 'SWORD', 'Steel' ]
                if(result.includes(upgrade[0])){
                    result.splice(result.indexOf(upgrade[0])+1,0,`${upgrade[0]}:${upgrade[1]}`)
                }
            }
        }
    console.log(result.join(' '));
}
inventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']);
