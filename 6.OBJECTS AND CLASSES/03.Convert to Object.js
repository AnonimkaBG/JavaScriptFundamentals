function convert (jsonString) {
    let person=JSON.parse(jsonString);
    let entries=Object.entries(person); 
    for(let [key,value] of entries){
        console.log(`${key}: ${value}`);
    }
}
convert('{"name": "George", "age": 40, "town": "Sofia"}');