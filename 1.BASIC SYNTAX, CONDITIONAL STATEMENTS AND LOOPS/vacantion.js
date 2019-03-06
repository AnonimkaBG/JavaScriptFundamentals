function vacantion(group,type,day){
    let finalPricePerPerson=0;
    let discount=0;
    let finalPrice=0;
    if(type=="Students"){
        if(day=="Friday"){
            finalPricePerPerson=8.45;
        }else if(day=="Saturday"){
            finalPricePerPerson=9.80;
        }else if(day=="Sunday"){
            finalPricePerPerson=10.46;
        }
        if(group>=30){
            discount=15;
        }
    }else if(type=="Business"){
        if(day=="Friday"){
            finalPricePerPerson=10.90;
        }else if(day=="Saturday"){
            finalPricePerPerson=15.60;
        }else if(day=="Sunday"){
            finalPricePerPerson=16;
        }
        if(group>=100){
            group=group-10;
        }
    }else if(type=="Regular"){
        if(day=="Friday"){
            finalPricePerPerson=15;
        }else if(day=="Saturday"){
            finalPricePerPerson=20;
        }else if(day=="Sunday"){
            finalPricePerPerson=22.50;
        }
        if(group>=10 && group <=20){
            discount=5;
        }
    }
    finalPrice=finalPricePerPerson*group;
    if(discount>0){
        console.log(`Total price: ${(finalPrice-(finalPrice*(discount/100))).toFixed(2)}`);
    }
    else{
        console.log(`Total price: ${finalPrice.toFixed(2)}`);
    }
}
vacantion(40,"Regular","Saturday");