function solve (input) {
    let arr=input[0].split(' ').filter(x=>x!=='').map(Number);
    for (let i = 1; i < input.length; i++) {
        let tokens=input[i].split(' ').filter(x=>x!=='');
        let command=tokens[0];
        switch(command){
            case 'Add': let numberToAdd=Number(tokens[1]);
                        arr.push(numberToAdd);
                        break;
            case 'Remove': let numberToRemove=Number(tokens[1]);
                           arr = arr.filter(num => num !== numberToRemove);
                           break;
            case 'RemoveAt': let removeAtIndex=Number(tokens[1]);
                             let indexAt = Number(tokens[1]);
                             arr.splice(indexAt,1);
                             break;
            case 'Insert': let numberToInsert=Number(tokens[1]);
                           let index = Number(tokens[2]);
                           arr.splice(index, 0, numberToInsert);
                           break;
        }
    }
    console.log(arr.join(' '));
}
solve(["4 19 2 53 6 43",
"Add 3",
"Remove 2",
"RemoveAt 1",
"Insert 8 3"]);