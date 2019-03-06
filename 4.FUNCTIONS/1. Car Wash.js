function carWash (commands) {
    let command='';
    let value=0;
    for (let i = 0; i < commands.length; i++) {
        if(commands[i]=='soap'){
            value+=10;
        }else if(commands[i]=='water'){
            value+=value*0.20;
        }else if(commands[i]=='vacuum cleaner'){
            value+=value*0.25;
        }else if(commands[i]=='mud'){
            value-=value*0.10;
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);