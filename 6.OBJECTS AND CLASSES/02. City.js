function city (name, area, population, country, postCode) {
    let obj={
        name,area,population, country, postCode
    }
    let entries=Object.entries(obj); 
    for(let [key,value] of entries){
        console.log(`${key} -> ${value}`);
    }
}
city("Sofia"," 492", "1238438", "Bulgaria", "1000");