function solve (input) {
    let collection=input.shift().split(' ').map(Number); // [ 115, 115, 101, 114, 73, 111, 116, 75 ]
    for (let i = 0; i < input.length; i++) {
        let commands=input[i].split(' ');     // [ 'Insert', '5', '114' ]
        let command=commands[0];              // Insert
        if(command==='END'){
            break;
        }
        let numbers=Number(commands[1]);             // 5
        let secondNumber=Number(commands[2]);        // 114   
        if(command==='Change'){
            if(collection.includes(numbers)){
                collection.splice(collection.indexOf(numbers),1,secondNumber);    // [ 115, 115, 101, 114, !70, 111, 116, 75 ]
            }
        }else if(command==='Hide'){
            if(collection.includes(numbers)){
                collection.splice(collection.indexOf(numbers),1);                 // [ 115, 115, 101, 114, 73, 111, 116 !]
            }
        }else if(command==='Switch'){
            if(collection.includes(numbers) && collection.includes(secondNumber)){
                if(collection.indexOf(numbers)>collection.indexOf(secondNumber)){
                collection.splice(collection.indexOf(numbers),1,secondNumber);
                collection.splice(collection.indexOf(secondNumber),1,numbers);    // [115, 115, 101, 114, !116, 111, !73, 75]
                }else{
                    collection.splice(collection.indexOf(secondNumber),1,numbers);
                    collection.splice(collection.indexOf(numbers),1,secondNumber);
                }
            }
        }else if(command==='Insert'){
            if(numbers<collection.length){
                collection.splice(numbers+1,0,secondNumber);                     // [ 115, 115, 101, 114, 73, 111, !114, 116, 75 ]
            }
        }else if(command==='Reverse'){
            collection.reverse();
        }
    }
    console.log(`${collection.join(' ')}`);
}
solve([ '77 120 115 101 101 97 78 88 112 111 108 101 111 110',
'Insert 5 32',
'Switch 97 78',
'Hide 88',
'Change 120 117',
'END' ]);