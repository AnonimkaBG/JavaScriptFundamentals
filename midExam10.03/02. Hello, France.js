function solve (input) {
    let commands=input[0].split('|');    // 'Clothes->43.30'
    let budget=Number(input.pop());      // 120
    let newPrices=[];
    let profit=0;
    let sumNewPrices=0;
    
    for (let i = 0; i < commands.length; i++) {
        let command=commands[i].split('->');  // [ 'Clothes', '43.30' ]
        let type=command[0];                  //  Clothes
        let price=Number(command[1]);                 // 43.30
        
        if(type==='Clothes'){
            if(price<=50){
                if(budget-price>=0){
                budget-=price;
                newPrices.push((price+price*0.40).toFixed(2));
                sumNewPrices+=price+price*0.40;
                profit+=price*0.40;
                }
            }
        }else if(type==='Shoes'){
            if(price<=35){
                if(budget-price>=0){
                budget-=price;
                newPrices.push((price+price*0.40).toFixed(2));
                sumNewPrices+=price+price*0.40;
                profit+=price*0.40;
                }
            }
        }else if(type==='Accessories'){
            if(price<=20.50){
                if(budget-price>=0){
                budget-=price;
                newPrices.push((price+price*0.40).toFixed(2));
                sumNewPrices+=price+price*0.40;
                profit+=price*0.40;
                }
            }
        }
    }
    console.log(`${newPrices.join(' ')}`);
    console.log(`Profit: ${profit.toFixed(2)}`);
    if(budget+sumNewPrices>=150){
        console.log(`Hello, France!`);
    }else{
        console.log(`Time to go.`);
    }
}
solve([ 'Clothes->43.30|Shoes->25.25|Clothes->36.52|Clothes->20.90|Accessories->15.60',
'120' ]);