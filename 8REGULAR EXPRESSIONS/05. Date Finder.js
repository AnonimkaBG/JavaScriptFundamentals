function solve (input) {
    let pattern = new RegExp(/\b(\d{1,2}\-[A-Z][a-z]{2}\-\d{4})\b/, 'g');
    let dates=[];

    for (const sentence of input) {
        let date='';
        while (date = pattern.exec(sentence)) {
            date = date[0].replace('-', ' ').replace('-', ' ');
            dates.push(date);
        }
    }
    dates.forEach(x=>console.log(x));
}
solve(['I am born on 28-Feb-1994.','This is not date: 512-Jan-1996.','My father is born on the 29-Jul-1955.']);