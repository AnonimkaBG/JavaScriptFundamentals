function solve (input) {
    
    input.pop();
    console.log(input);
   let days=Number(input.shift());
   let players=Number(input.shift());
   let energy=Number(input.shift());
   let water=Number(input.shift())*days*players;
   let food=Number(input.shift())*days*players;
   let isReady=true;
   
   for (let i = 1; i <=days; i++) {
       energy-=Number(input[i-1]);
       if(energy<=0){
        isReady=false;
        console.log(`You will run out of energy. You will be left with ${food.toFixed(2)} food and ${water.toFixed(2)} water.`);
        break;
    }
       if(i%2===0){
           energy+=energy*0.05;
           water-=water*0.30;
       }
       if(i%3===0){
           energy+=energy*0.10;
           food-=food/players;
       }
   }
    if(isReady){
       console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);
    } 
}
solve([ '12',
'6',
'4430',
'9.8',
'5.5',
'620.3',
'840.2',
'960.1',
'220',
'340',
'674',
'365',
'345.5',
'212',
'412.12',
'258',
'496',
'' ]);