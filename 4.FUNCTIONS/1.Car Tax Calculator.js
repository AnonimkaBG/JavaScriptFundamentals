function taxCalculator (type,kW,age) {
    let power=kW;
    let powerPrice=calculate(power);
    let coefficientPrice=coefficientFunc(age);
    let motorcyclePrice=motorcycleTax(kW,age);
    switch(type){
        case 'motorcycle': motorcyclePrice;
        console.log(motorcyclePrice+ ' lv.');
        break;
        case 'car': let result=powerPrice*coefficientPrice;
        console.log(result.toFixed(2)+' lv.');
        break;
    }
 function calculate (power) {
        let tax=0;
        if(power>110){
            tax=power*1.54;
        }else if(power>74){
            tax=power*1.38;
        }else if(power>55){
            tax=power*0.68;
        }else if(power>37){
            tax=power*0.50;
        }else {
            tax=power*0.43;
        }
        return tax.toFixed(2);
}
 function coefficientFunc (age) {
    let coefficient=0;
    if(age>14){
       coefficient=1;
    }else if(age>5){
        coefficient=1.5;
    }else {
        coefficient=2.80;
    }
    return coefficient.toFixed(2);
}
function motorcycleTax (kW) {
    let taxPrice=0.00;
    if(kW>750){
        taxPrice=125;
    }else if(kW>490){
        taxPrice=94;
    }else if(kW>350){
        taxPrice=63;
    }else if(kW>250){
        taxPrice=44;
    }else if(kW>125){
        taxPrice=31;
    }else{
        taxPrice=15;
    }
    return taxPrice.toFixed(2);
}
}
taxCalculator('motorcycle',450,10);