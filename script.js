//password generator
function generate(){

    //possible password values

    var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] //DO THE SAME FOR THE REST OF THE VARIABLES
    var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var Numbers = ["1","2","3","4","5","6","7","8","9","0"]
    var specialCharacters = ["!","@","#","$","^","&","*","(",")","_","+"]

    var PasswordOptions= getPasswordOptions() 
    console.log(PasswordOptions)


  //add all uppercase to total list
  //do the same thing if use special
  //do for loop for i is < password
  //




    let password = "";

    //for loop to choose password characters
// WRITE A FUNCTION THAT WILL UTILIZE MATH FOR AND MAT RANDOM IN A VARIABLE... WRITE ANOTHER FUNCTION THAT WILL FIRST OF CALL getPassWordOptions AND INSIDE OF THERE SET UP VARIABLES AS ARRAYS (PLACEHOLDER FOR DATA) THERE WILL BE A COUPLE OF IF STATEMENTS
    
    for i()


    //shows password in the text box
    document.getElementById("display").value = password;
}


function getPasswordOptions(){
    var length = parseInt(
        prompt("Password Must be Minimum 8 characters, 128 Maximum")
    )
    if(isNaN(length)=== true){
        alert("password length must be a number");
        return
    }
    if(length < 8){
        alert("password length must be at least 8 characters");
        return
    }
    if(length > 128){
        alert("password length must be less than 128 characters")
        return
    }
    var hasSpecialCharacters = confirm(
        "click ok to confirm including special characters"
    )
    var hasUpperCase = confirm(
        "click ok to confirm including upper case"
    )
    var hasLowerCase = confirm(
        "click ok to confirm including lower case"
    )
    var hasNumbers = confirm(
        "click ok to confirm including numbers"
    )
    if(hasSpecialCharacters === false && hasUpperCase === false && hasLowerCase === false && hasNumbers === false){
        alert("must select at least one character type");
        return
    }
    var PasswordOptions = {
        length: length,
        hasSpecialCharacters: hasSpecialCharacters,
        hasUpperCase: hasUpperCase,
        hasLowerCase: hasLowerCase,
        hasNumbers: hasNumbers
    }
        return PasswordOptions
}

