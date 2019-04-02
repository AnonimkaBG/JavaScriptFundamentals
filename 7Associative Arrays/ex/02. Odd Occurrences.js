function solve (input) {
    let map=new Map();
    let list=input.toLowerCase().split(' ');
    let result='';
    for (const line of list) {
        if(!map.has(line)){
            map.set(line,1);
        }else{
            map.set(line,map.get(line)+1);
        }
    }
    for (const [word,count] of map) {
        if(count%2!==0){
            result+=word+' ';
        }
    }
    console.log(result);
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');