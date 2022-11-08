let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];

// PLAN 
// four new variables for 3, 5, 60, 90 
// check each is true or false depending on if multiple is present in someNumbers 
// use .some to check

let threeInArray = someNumbers.some((number)=>{
    let checkNumber = number % 3;
    if (checkNumber == 0) {
        return true; 
    } else {
        return false;
    }
});

console.log(threeInArray);

let fiveInArray = someNumbers.some((number) => {
    return number % 5 == 0
    }
);

console.log(fiveInArray);