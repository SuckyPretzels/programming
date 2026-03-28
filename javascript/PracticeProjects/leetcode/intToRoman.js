const prompt = require('prompt-sync')({ sigint: true });

var intToRoman = function(num) {
    num = Number(num);
    if (isNaN(num)) {
        console.log("This is not a number.");
        return;
    }
    if (num < 1 || num > 3999) {
        console.log("Number out of range.");
        console.log("Needs to be a number between 1 and 3999.");
        return;
    }

    let total = "";
    const symbols = [
        "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"
    ]; 
    const values = [
        1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
    ];

    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            num -= values[i];
            total += symbols[i];
        }
    }
    return total;
};

let num = prompt("Give me an integer and i'll convert it to a roman numeral: ");
console.log(intToRoman(num));
