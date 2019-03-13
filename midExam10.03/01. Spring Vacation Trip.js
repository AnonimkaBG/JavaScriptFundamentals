function solve (input) {
    /* Input
On the 1st line, you are going to receive the days of the trip – an integer in the range [1…100]
On the 2nd line – the budget – a real number in the range [0.00 – 1000000.00]
On the 3rd line - the group of people – an integer in the rang [1 - 50]
On the 4th line – the price for fuel per kilometer – a real number [0.00 – 20.00]
On the 5th line – food expenses per person for a day – a real number [0.00 – 50.00]
On the 6th line – the price for a room for one night per person – a real number [0.00 – 1000.00]
On the next n lines – one for each of the days – the travelled distance in kilometers per day– a real number in the range [0.00 - 1000] 
Output
"Not enough money to continue the trip. You need {money}$ more." – 
if the budget is not enough
"You have reached the destination. You have {money}$ budget left." – if it’s enough.
Print the result formatted 2 digits after the decimal separator. */
     let days=Number(input.shift());
     let budget=Number(input.shift());
     let people=Number(input.shift());
     let priceFuelPerKm=Number(input.shift());
     let foodPerPerson=Number(input.shift());
     let priceRoomPerPerson=Number(input.shift());

     let foodExpenses=foodPerPerson*people*days;
     let totalHotelExpenses=priceRoomPerPerson*people*days;

     if(people>10){
         totalHotelExpenses-=(25/100)*totalHotelExpenses;      
    }
     let totalExpenses=foodExpenses+totalHotelExpenses;
     if(totalExpenses>budget){
        console.log(`Not enough money to continue the trip. You need ${(totalExpenses-budget).toFixed(2)}$ more.`);
     }

     for (let i = 1; i <=days; i++) {
        if (totalExpenses >= budget) {
            break;
        }
         totalExpenses+=Number(input[i-1])*priceFuelPerKm;
         if(i%3===0 || i%5===0){
             totalExpenses+=0.4*totalExpenses;
         }
         if(i%7===0){
             totalExpenses-=totalExpenses/people;
         }
     }
     
     if(budget>=totalExpenses){
        console.log(`You have reached the destination. You have ${(budget-totalExpenses).toFixed(2)}$ budget left.`);
    }else{
        console.log(`Not enough money to continue the trip. You need ${(totalExpenses-budget).toFixed(2)}$ more.`);
    }
}
solve([ '10',     //Not enough money to continue the trip. You need 465.79$ more.
'20500',
'11',
'1.2',
'8',
'13',
'100',
'150',
'500',
'400',
'600',
'130',
'300',
'350',
'200',
'300' ]);