function santaList (input) {
    let result=input.shift().split('&');  //[ 'Peter', 'George', 'Mike' ]
    for (let i = 0; i < input.length; i++) {
        if(input[i]==='Finished!'){       // if the commands says Finished it breaks the loop
            break;
        }
        let tokens=input[i].split(' ');  //[ 'Bad', 'Joshua' ]
        let command=tokens[0];           //Bad
        let kid=tokens[1];              // Joshua
        let newName=tokens[2];
        
        if(command==='Bad'){
            if(!result.includes(kid)){   // if it doesnt contains the name
                result.unshift(kid);        // adds the kid name in the start of the arr
            }
        }else if(command==='Good'){
            if(result.includes(kid)){   // if the list contains the kid name
                result.splice(result.indexOf(kid),1); // remove the name from the list
            }
        }else if(command==='Rename'){
            if(result.includes(kid)){  //if the list contains the kid name
                let index=result.indexOf(kid);
                result.splice(index,1,newName);//replace the old name with the new one
            }
        }else if(command==='Rearrange'){
            if(result.includes(kid)){
                result.splice(result.indexOf(kid),1);// removes the name from the list
                result.push(kid);                    // adds the name at the end
            }
        }
    }
    console.log(result.join(', '));
}
santaList([ 'Joshua&Aaron&Walt&Dustin&William',
'Good Walt',
'Bad Jon ',
'Rename Aaron Paul',
'Rearrange Jon',
'Rename Peter George',
'Finished!' ]);
// Joshua, Paul, Dustin, William, Jon