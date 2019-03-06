function breadFactory (input1) {
    let input=input1.toString();
    let energy=100;
    let coins=100;
    let gainedEnergy=0;
    let bankrupt=false;
    let commands=input.split('|'); //[ 'rest-2', 'order-10', 'eggs-100', 'rest-10' ]

    for (let i = 0; i < commands.length; i++) {
        let tokens=commands[i].split('-'); // [ 'rest', '2' ]
        let command=tokens[0];             // rest
        let amount=Number(tokens[1]);              // 2

            if(command==='rest'){
                gainedEnergy = Math.min(amount, 100 - energy)
                energy+=gainedEnergy;
                    console.log(`You gained ${gainedEnergy} energy.`);
                    console.log(`Current energy: ${energy}.`);
            }else if(command==='order') {
                if (energy - 30 >= 0){
                    coins+=amount;
                    energy-=30;
                    console.log(`You earned ${amount} coins.`);
                }else{
                    energy += 50
                console.log(`You had to rest!`)
                }
            }
            else {
                coins-=amount;
               if(coins>0){
                   console.log(`You bought ${command}.`);
               }else{
                   console.log(`Closed! Cannot afford ${command}.`);
                   bankrupt=true;
                   break;
               }
            }
    }
    if(coins>0){
        console.log(`Day completed!\nCoins: ${coins}\nEnergy: ${energy}`);
    }
}
breadFactory('order-10|order-10|order-10|flour-100|order-100|oven-100|order-1000');
/*
You earned 10 coins.
You earned 10 coins.
You earned 10 coins.
You bought flour.
You had to rest!
Closed! Cannot afford oven.
 */