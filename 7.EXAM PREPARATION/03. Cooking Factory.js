function breadFactory (input1) {
    let input=input1.toString().split(',');
    let bestBatch=[Number.MIN_SAFE_INTEGER];
    for (let element of input) {
        if(element=='Bake It!'){
            console.log(`Best Batch quality: ${sum(bestBatch)}\n${bestBatch.join(' ')}`);
        }else{
            let currentBatch=element.split('#').map(Number);  
            let foundBetterBatch=false;  
            if (sum(bestBatch) < sum(currentBatch)) {   
                foundBetterBatch = true;                
            } else if (sum(bestBatch) === sum(currentBatch)) {    
                if (average(bestBatch) < average(currentBatch)) {
                    foundBetterBatch = true;
                } else if (average(bestBatch) === average(currentBatch) &&  
                    bestBatch.length > currentBatch.length) {              
                    foundBetterBatch = true;
                }
            }
            if (foundBetterBatch) {                 
                bestBatch = currentBatch.slice();  
            }
        }
    function sum(arr) { 
        return arr.reduce((a, b) => a + b, 0); 
    }
    function average(arr) {
        return sum(arr) / arr.length;
    }
    } 
}
breadFactory([ '5#3#2', '10#2#-2#1#-1', '4#2#1', 'Bake It!' ]);
/* Best Batch quality: 10
5 3 2 */