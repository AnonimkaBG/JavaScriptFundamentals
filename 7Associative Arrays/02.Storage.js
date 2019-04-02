function solve (input) {
    let storage=new Map();

    for (const key of input) {
        const[item,quantityInput]=key.split(' ');
        let quantity=Number(quantityInput);
        if(storage.has(item)){
            quantity+=storage.get(item);
        }
        storage.set(item,quantity);
    }
    for (const key of storage) {
        let [name,amount]=key;
        console.log(`${name} -> ${amount}`);
    }
}
solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);