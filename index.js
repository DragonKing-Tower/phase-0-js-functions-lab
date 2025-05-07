function calculateTax (amount){
    return amount*.1
}

function convertToUpperCase (text){
    return text.toUpperCase()
}

function findMaximum (num1,num2){
    if (num1 > num2){
        return num1
    }else if (num2 > num1){
        return num2
    }else return num1
}

function isPalindrome(word){
    let letterArray = word.split("")
    let reverseArray = letterArray.reverse()
    return word === reverseArray.join("")
}

function calculateDiscountedPrice (origonalPrice, DiscountPercentage){
    return origonalPrice*(100-DiscountPercentage)/100
}



// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };