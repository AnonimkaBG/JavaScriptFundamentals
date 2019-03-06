function personInfo (firstName, lastName, age) {
    let object={
    firstName,
    lastName,
    age
    }
    let entries=Object.entries(object); //[ [ 'firstName', 'Peter' ],[ 'lastName', 'Pan' ],[ 'age', '20' ] ]
    for(let [key,value] of entries){
        console.log(`${key}: ${value}`);
    }
}
personInfo("Peter", "Pan", "20");