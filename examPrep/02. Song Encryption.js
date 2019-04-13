function solve (input) {
    let encriptResult=[];             
    let re=/^[A-Z][a-z\s\']+\:[A-Z\s]+$/;

    for (let line of input) {
        if(line==='end'){
            break;
        } 
        if (line.match(re)) {
            let key=line.split(':')[0].length;
            encriptResult=line.split('');
            for (let i = 0; i < encriptResult.length; i++) {
                let currentSymbol=encriptResult[i];
                let asciiCode=currentSymbol.charCodeAt(0);
                asciiCode+=key;
                if (currentSymbol.match(/[A-Za-z]/)) {
                    if (currentSymbol.match(/[A-Z]/) && asciiCode > 90) {
                        asciiCode = (asciiCode % 90) + 64;
                    } else if (currentSymbol.match(/[a-z]/) && asciiCode > 122) {
                        asciiCode = (asciiCode % 122) + 96;
                    }
                    encriptResult[i] = String.fromCharCode(asciiCode);
                }
            }
            console.log(`Successful encryption: ${encriptResult.join('').replace(':', '@')}`);
        } else {
            console.log(`Invalid input!`);
        }
    }
}
solve([ 'Michael Jackson:ANOTHER PART OF ME',
'Adele:ONE AND ONLY',
'Guns n\'roses:NOVEMBER RAIN',
'Christina Aguilera: HuRt',
'end' ]);
/*Invalid input!
Successful encryption: Fijqj@TSJ FSI TSQD
Successful encryption: Sgze z'daeqe@ZAHQYNQD DMUZ
Invalid input! */