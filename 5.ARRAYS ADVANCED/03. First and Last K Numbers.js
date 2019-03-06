function solve (arr) {
    let k=arr.shift();
    // let firstArr=[];
    // let lastArr=[];
    // for (let i = 0; i < k; i++) {
    //     firstArr.push(arr[i]);
    // }
    // for (let j = arr.length-k; j <arr.length; j++) {
    //     lastArr.push(arr[j]);
    // }
    let firstArr=arr.slice(0,k);
    let lastArr=arr.slice(arr.length-k);
    console.log(firstArr.join(' '));
    console.log(lastArr.join(' '));
}
solve([2, 
    7, 8, 9]);