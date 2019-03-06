/*Write a JS function to print a chessboard of size n X n. See the example for more information.
The input comes as a single number argument n.
The output should be returned as a result of your function in the form of a string.*/
function solve(n){
    let classColor = 'black';
    console.log('<div class="chessboard">');
    for(let i = 1; i <= n; i += 1){
        console.log('  <div>');
        let currentColor = classColor;
        for (let j = 1; j <= n; j += 1) {
            console.log(`    <span class="${currentColor}"></span>`);
            currentColor = currentColor === 'black' ? 'white' : 'black';
        }
        console.log('  </div>');
        classColor = classColor === 'black' ? 'white' : 'black';
    }
    console.log('</div>');
}
solve(3);