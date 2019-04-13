function solve (input) {
    let games={};
    let gamesWithDLC={};
    let inputArr=input[0].split(', ');
    for (let i = 0; i < inputArr.length; i++) {
        let currentBand=inputArr[i];
        if(!currentBand.includes(':')){
            let gameName=currentBand.split('-')[0];
            let price=Number(currentBand.split('-')[1]);
            games[gameName]=price;
        }else{
            let [gameName,DLC]=currentBand.split(':');
            if(games.hasOwnProperty(gameName)){
                let gamePrice=games[gameName];
                gamePrice=gamePrice+gamePrice*0.20;
                delete games[gameName];
                let gameWithDLCName=gameName+' - '+DLC;
                gamesWithDLC[gameWithDLCName]=gamePrice;
            }
        }
    }
    let sortedGamesWithDLC=[]
    for (const game in gamesWithDLC) {
        let newPrice=gamesWithDLC[game]/2;
        sortedGamesWithDLC.push([game,newPrice]);
    }
    sortedGamesWithDLC.sort((a,b)=>a[1]-b[1]);
    let sortedGames=[]
    for (const game in games) {
        let newPrice=games[game]-games[game]*0.20;
        sortedGames.push([game,newPrice]);
    }
    sortedGames.sort((a,b)=>b[1]-a[1]);
    for (const [game,price] of sortedGamesWithDLC) {
        console.log(`${game} - ${price.toFixed(2)}`);
    }
    for (const [game,price] of sortedGames) {
        console.log(`${game} - ${price.toFixed(2)}`);
    }
}
solve([ 'WitHer 3-50, FullLife 3-60, WitHer 3:Blood and Beer, Cyberfunk 2077-120, League of Leg Ends-10, League of Leg Ends:DoaT' ]
);
// solve([ 'Center Strike-14.99, FortLite-25, BattleShield 5-64.74, BattleShield 5:CoD edition, Dog of War-45, Dead Red Redemption-100, Dead Red Redemption:no DLC' ]
// );