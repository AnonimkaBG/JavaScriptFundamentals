function spirit (input) {
    let quantity=Number(input.shift());
    let days=Number(input);
    let spirit=0;
    let cost=0;
    let ornament=2;
    let skirt=5;
    let garland=3;
    let lights=15;

    for (let i = 1; i <= days; i++) {
        if(i%11==0){
            quantity+=2;
        }
        if(i%2==0){
            cost+=ornament*quantity;
            spirit+=5;
        }
        if(i%3==0){
            cost+=skirt*quantity+garland*quantity;
            spirit+=13;
        }
        if(i%5==0){
            cost+=lights*quantity;
            spirit+=17;
            if(i%3==0){
                spirit+=30;
            }
        }
        if(i%10==0){
            spirit-=20;
            cost+=skirt+garland+lights;
            if(i===days){
                spirit-=30;
            }
        }
    }
    console.log(`Total cost: ${cost}`);
    console.log(`Total spirit: ${spirit}`);
}
spirit([1,15]);