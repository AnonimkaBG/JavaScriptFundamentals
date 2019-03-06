function questsJournal (input) {
    let journal=input.shift().split(', ');     //  [ 'Hello World', 'If else' ]
    
    for (let i = 0; i < input.length; i++) {
        let commands=input[i].split(' - ');    //  [ 'Start ', ' While loop' ]           
        let command=commands[0];              //   Start
        let quest=commands[1];                //   While loop
        if(command==='Start'){
            if(!journal.includes(quest)){    
                journal.push(quest);          //  [ 'Hello World', ' For loop', ' If else', ' While loop' ]
            }
        }else if(command==='Complete'){
            if(journal.includes(quest)){
                journal.splice(journal.indexOf(quest),1); // [ 'Hello World', ' If else', ' While loop' ]
            }
        }else if(command==='Side Quest'){
            let sideQuest=quest.split(':');    //  [ ' If else', 'Switch' ]
            let newQuest=sideQuest[1];         //  Switch
            if(journal.includes(sideQuest[0])){
                if(!journal.includes(newQuest)){
                    journal.splice(journal.indexOf(sideQuest[0])+1,0,newQuest);  // [ 'Hello World', ' If else', 'Switch', ' While loop' ]
                }
            }
        }else if(command==='Renew'){
            if(journal.includes(quest)){
                journal.splice(journal.indexOf(quest),1);
                journal.push(quest);
            }
        }else if(command==='Retire!'){
            console.log(journal.join(', '));
        }
    }
}
questsJournal([ 'Hello World, If else',
'Complete - Homework',
'Side Quest - If else:Switch',
'Renew - Hello World',
'Retire!' ]
);