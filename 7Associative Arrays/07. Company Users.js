function solve (input) {
    let companies={};

    for (let element of input) {
        let tokens=element.split(' -> ');
        let name=tokens[0];
        let id=tokens[1];

        if(!companies.hasOwnProperty(name)){
            companies[name]=[];
        }
        if(!companies[name].includes(id)){
            companies[name].push(id);
        }
    }
    let sorted=Object.entries(companies).sort((a,b)=>a[0].localeCompare(b[0]));

    for (const [company,idData] of sorted) {
        console.log(company);
        for(let id of idData){
            console.log(`-- ${id}`);
            
        }
    }
}
solve(['SoftUni -> AA12345',
'SoftUni -> BB12345',
'Microsoft -> CC12345',
'HP -> BB12345'
]);