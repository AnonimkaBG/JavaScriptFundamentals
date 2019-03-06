function partyProfits (input) {
    let companions=Number(input.shift());    // 3
    let days=Number(input.pop());            // 5
    let coins=0;

    for (let i = 1; i <= days; i++) {
        if(i%15==0){
            companions+=5;
        }
        if(i%10==0){
            companions-=2;
        }
        coins+=50-2*companions;
        if(i%5==0){
            coins+=20*companions;
            if(i%3==0){
                coins-=2*companions;
            }
        }
        if(i%3==0){
            coins-=3*companions;
        }
    }
    console.log(`${companions} companions received ${Math.floor(coins/companions)} coins each.`);
}
partyProfits([ '15', '30' ]);