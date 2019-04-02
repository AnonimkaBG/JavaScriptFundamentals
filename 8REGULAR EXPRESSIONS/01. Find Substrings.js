function solve (text,substring) {
    let pattern=new RegExp(substring,'gi');
    let counter=0;
    let r='';
    while(r=pattern.exec(text)){
        counter++;
    }
    console.log(counter);
}
solve("Welcome to the Software University (SoftUni)! Welcome to programming. Programming is wellness for developers, said Maxwell.", "wel");