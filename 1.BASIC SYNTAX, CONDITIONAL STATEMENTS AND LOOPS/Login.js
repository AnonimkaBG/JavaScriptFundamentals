function login(attempts){
   let userName=attempts[0];
   for(let i=1;i<attempts.length;i++){
    if (attempts[i] === userName.split('').reverse().join('')) {
        console.log(`User ${userName} logged in.`);
        return;
    } else {

        if (i == attempts.length - 1) break;

        console.log('Incorrect password. Try again.');
    }
   }
   console.log(`User ${userName} blocked!`);
}
login([`sunny`,`rainy`,`cloudy`,`sunny`,`not sunny`]);