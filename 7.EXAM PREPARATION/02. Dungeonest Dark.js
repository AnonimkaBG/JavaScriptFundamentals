function dungeonestDark (input) {
    let health=100;
    let coins=0;
    let commands=input.toString().split('|'); //[ 'rat 10','bat 20','potion 10','rat 10','chest 100','boss 70', 'chest 1000' ]
    for (let i = 0; i <commands.length; i++) {
        let room=commands[i].split(' ');      //[ 'rat', '10' ]
        let command=room[0];                  //'rat'
        let amount=Number(room[1]);                   //'10'
        if(command==='potion'){
            health+=amount;
            let extraHeal=0;
            let healed=0;
            if(health>100){
                extraHeal=health-100;
                healed=amount-extraHeal;
                health-=extraHeal;
                console.log(`You healed for ${healed} hp.\nCurrent health: ${health} hp.`);
            }else{
                console.log(`You healed for ${amount} hp.\nCurrent health: ${health} hp.`);
            }
            
        }else if(command==='chest'){
            coins+=amount;
            console.log(`You found ${amount} coins.`);
        }else{
            health-=amount;
            if(health>0){
                console.log(`You slayed ${command}.`);
            }else{
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i+1}`);
                break;
            }
        }
    }
    if(health>0){
        console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`);
    }
}
dungeonestDark([ 'cat 10|potion 30|orc 10|chest 10|snake 25|chest 110' ]);