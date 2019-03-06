function passwordChecker (password) {
    let pass=password.toString().split('');                           //[ 'l', 'o', 'g', 'I', 'n', '3', '4', '3' ]
      if(charChecker(pass)==true && lettersAndDigitsChecker(password)==true && digitsChecker(password)==true){
          console.log('Password is valid');
      } if(charChecker(pass)!=true){
          console.log("Password must be between 6 and 10 characters");
      } if(lettersAndDigitsChecker(password)!=true){
          console.log("Password must consist only of letters and digits");
      } if(digitsChecker(password)!=true){
          console.log("Password must have at least 2 digits");
      }
    function charChecker (pass) {                                     //okay
        if(pass.length<6 || pass.length>10){
            return false;
        }else{
            return true;
        }
    }
    function lettersAndDigitsChecker (password) {                        //okay
         let n=/^[A-z0-9]+$/g;
         if(n.test(password)){
            return true;
        } else {
            return false;
        }
    }
    function digitsChecker (password) {                             //okay
        let regex=/[a-zA-Z!-/]/gi;
        if(password.toString().replace(regex,"").length >= 2){
            return true;
        }else{
            return false;
        }
    }
}
passwordChecker('Pa$s$s');