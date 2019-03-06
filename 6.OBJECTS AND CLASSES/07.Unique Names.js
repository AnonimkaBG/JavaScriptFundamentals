function usernames (input) {
    let current='';
    for (let i = 0; i < input.length; i++) {
        if(current==input[i]){
            input.splice(input.indexOf(input[i]),1);
            i--;
        }
        current=input[i];
    }
    input.sort((a, b) => (a.length - b.length !== 0) ? a.length - b.length
    : a < b ? -1
        : a > b ? 1
            : 0);
    for (let element of input) {
        console.log(element);
    }
}
usernames(["Denise",
"Denise",
"Denise",
"Denise",
"Indie",
"Dean",
"Donatello",
"Enfuego",
"Benjamin",
"Biser",
"Bounty",
"Renard",
"Rot"]
);