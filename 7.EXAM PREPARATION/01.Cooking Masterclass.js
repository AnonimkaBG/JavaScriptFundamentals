function masterClass (input) {
    let budget=Number(input.shift());
    let students=Number(input.shift());
    let priceFlourPackage=Number(input.shift());
    let priceEgg=Number(input.shift());
    let priceApron=Number(input.shift());
    let freePackages=0;

    for (let i = 1; i <= students; i++) {
        if(i%5===0){
            freePackages++;
        }
    }                 
    let neededItems=priceApron*(students+(Math.ceil(students*0.20)))+priceEgg*10*students+priceFlourPackage*(students-freePackages);
    if(neededItems<=budget){
        console.log(`Items purchased for ${neededItems.toFixed(2)}$.`);
    }else{
        console.log(`${(neededItems-budget).toFixed(2)}$ more needed.`);
    }
}
masterClass([100,25, 4.0,1.0, 6.0]);