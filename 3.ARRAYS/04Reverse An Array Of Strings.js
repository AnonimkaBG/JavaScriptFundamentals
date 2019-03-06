//Receive an array of strings (space separated values), reverse it and print its elements. Swap elements. For example the first element should be last 
//and the last element should be first etc.
function solve(arr){
    for (let i = 0; i < arr.length/2; i++) {
        let lowerElement=arr[i];
        arr[i]=arr[arr.length-1-i];
        arr[arr.length-1-i]=lowerElement;
    }
    console.log(arr.join(' '));
    
}
solve(['a', 'b', 'c', 'd', 'e'])