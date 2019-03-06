function bitcoinMining(gold){
  let earnedMoney=0;
  let days=1;
  let bitcoins=0;
  let firstBTC=0;
  const goldPrice=67.51;
  const btcPrice=11949.16;
  for(let i=0;i<gold.length;i++,days++){
    let minedGold=Number(gold[i]);
    if(days%3==0){
        minedGold -= minedGold * 0.3;
    }
    earnedMoney += minedGold * goldPrice;
    while(earnedMoney>=btcPrice){
        earnedMoney-=btcPrice;
        bitcoins++;
        if (firstBTC === 0){
         firstBTC = days;
        }
    }
  }
  console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoins > 0)
        console.log(`Day of the first purchased bitcoin: ${firstBTC}`);
    console.log(`Left money: ${earnedMoney.toFixed(2)} lv.`)
}
bitcoinMining([100,200,300]);