function ladyBug (input) {
    let fieldSize=input[0];
    let field=new Array(fieldSize).fill(0,0,fieldSize);
    let bugIndexes=input[1].split(' ').map(Number).filter(i=>i>=0 && i<fieldSize);
    bugIndexes.forEach(i=>field[i]=1);
    for (let i = 2; i < input.length; i++) {
        let tokens=input[i].split(' ');
        let index=Number(tokens[0]);
        let direction=tokens[1];
        let flyLength=Number(tokens[2]);
        if(field[index]===1){
            field[index]=0;
            while(index>=0 && index<field.length){
                if(direction==='right'){
                    index+=flyLength;
                }else if(direction=='left'){
                    index-=flyLength;
                }
                if(field[index]===0){
                    field[index]=1;
                    break;
                }
            }
        }
    }
    console.log(field.join(' '));
}
ladyBug([ 3, '0 1',
'0 right 1',
'2 right 1' ]);