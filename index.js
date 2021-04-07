// create a `validatePassword` function which will return true when 
// the password given meets all the listed requirements listed below.

const validatePassword = (valPass) => {
    
        }

const length = (valPass) => {
    if (length.valPass > 8){
        return true
 }
     else return false

     }
 

const lower = (valPass) => {
    let lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q','r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    for (let i = 0; i< valPass.length; i++){
        if (lower.indexOf(valPass[i]) >=0){
            return true
        }
        else return false
       
    }

}

const UPPER = (valPass) => {
    let UPPER = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K','L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    for (let i = 0; i< valPass.length; i++){
        if (Upper.indexOf(valPass[i]) >=0){
            return true
        }
        else return false
    }
}


const numeric = (valPass) => {
    let numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    for (let i = 0; i < valPass.length; i++) {
        if (numeric.indexOf(valPass[i]) >= 0){
            return true
        }
        else return false

    }
}


const special = (valPass) => {
    let special =  ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', '[', ']', '{', '}', '|', ':']
    for (let i = 0; i <valPass.length; i++){
        if (special.indexOf(valPass[i] >= 0) ){
            return true
        }
        else return false
    }         
    
}

let validatePassword = (valPass) => {
    if  ((length(valPass)) &&
    (UPPER(valPass)) && 
    (lower(valPass)) && 
    (numeric(valPass)) &&
    (special(valPass))) {
    return true
    }
    else return false}
    ​
    module.exports = validatePassword
// Password Rules
// Must be a minimum of 8 characters (LINE 14)
// Must contain at least one lower case letter (Line 16)
// Must contain at least one upper case letter (Line 18)
// Must contain at least one numeric value (Line 20)
// Must contain at least one special character
