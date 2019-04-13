function solve (input) {
    let keys=input[0].split('&');
    let validKeys=[];
    let index=0;
    for (let i = 0; i < keys.length; i++) {
        if(/[A-Za-z0-9]{25}/g.test(keys[i])){
            let currentKey=keys[i].split('');
            for (let j = 0; j < 4; j++) {
                index+=5;
                currentKey.splice(index,0,'-');
                index++;
            }
            for (const char of currentKey) {
                if(/[0-9]/g.test(Number(char))){
                    let newChar=9-Number(char);
                    currentKey.splice(currentKey.indexOf(char),1,newChar);
                }
            }
            index=0;
            let newKey=currentKey.join('').toUpperCase();
            validKeys.push(newKey);
        }else if(/[A-Za-z0-9]{16}/g.test(keys[i])){
            let currentKey=keys[i].split('');
            for (let j = 0; j < 3; j++) {
                index+=4;
                currentKey.splice(index,0,'-');
                index++;
            }
            for (const char of currentKey) {
                if(/[0-9]/g.test(Number(char))){
                    let newChar=9-Number(char);
                    currentKey.splice(currentKey.indexOf(char),1,newChar);
                }
            }
            index=0;
            let newKey=currentKey.join('').toUpperCase();
            validKeys.push(newKey);
        }
    }
    console.log(validKeys.join(', '));
}
solve([ 't1kjZU764zIME6Dl9ryD0g1U8&-P4*(`Q>:x8\yE1{({X/Hoq!gR.&rg93bXgkmILW188m&KroGf1prUdxdA4ln&U3WH9kXPY0SncCfs' ]);