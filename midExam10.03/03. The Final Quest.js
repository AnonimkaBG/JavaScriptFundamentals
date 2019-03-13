function solve (input) {
    let collection=input.shift().split(' ');     // [ 'Congratulations!','You','last','also','through','the','have','challenge!' ]
    
    for (let i = 0; i < input.length; i++) {
        let entries=input[i].split(' ');         // [ 'Swap', 'have', 'last' ]
        let command=entries[0];                  // Swap
        let firstValue=entries[1];               // have
        let secondValue=entries[2];              // last
        if(command==='Stop'){
            break;
        }else if(command==='Delete'){
            if(+firstValue<=collection.length-1 && +firstValue>=0){
                collection.splice(+firstValue+1,1);
            }
        }else if(command==='Swap'&& collection.indexOf(firstValue)!==-1 && collection.indexOf(secondValue)!==-1 ){
            if(collection.includes(firstValue) && collection.includes(secondValue)){
                if(collection.indexOf(firstValue)>collection.indexOf(secondValue)){
                    collection.splice(collection.indexOf(firstValue),1,secondValue);
                    collection.splice(collection.indexOf(secondValue),1,firstValue);   
                }else{
                    collection.splice(collection.indexOf(secondValue),1,firstValue); 
                    collection.splice(collection.indexOf(firstValue),1,secondValue);
                }
            }
        }else if(command==='Put'){
            if(+secondValue>0 && +secondValue<=collection.length+1){
                collection.splice(+secondValue-1,0,firstValue);
            }
        }else if(command==='Sort'){
            collection.sort().reverse();
        }else if(command==='Replace' && collection.indexOf(secondValue)!==-1){
            if(collection.includes(secondValue)){
                collection.splice(collection.indexOf(secondValue),1,firstValue);
            }
        }
    }
    console.log(collection.join(' '));
}
solve([ 'Congratulations! You last also through the have challenge!',
'Swap have last',
'Replace made have',
'Delete 2',
'Put it 4',
'Stop',
'' ]);