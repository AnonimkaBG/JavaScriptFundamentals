function solve (text,namesArr) {
    let textArr=text.split(' ');
    let index=0;
    
    for (let i = 0; i < textArr.length; i++) {
        if(textArr[i]==='dwarf'){
            if (namesArr.length > 0) {
                textArr.splice(i + 1, 0, namesArr.shift());
            } else {
                textArr.splice(i, 1);
            }
        }
    }
    console.log(textArr.join(' '));
}
solve("Yet another dwarf fairytale tragedy! There are dwarf so many dwarfs, is it dwarf possible to help dwarf Show white?",
["Doc", "Dopey", "Sleepy"]);