const prompt = require('prompt-sync')({ sigint: true });

/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    s = s.toUpperCase();
    let total = 0;
    let repeat = 1;
    const values = {
        I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
    };
    const ids = {
        I: 1, V: 2, X: 3, L: 4, C: 5, D: 6, M: 7
    };
    for (let i = 0; i < s.length; i++) {
        let curr = s[i];
        let next = s[i+1];
        let prev = s[i-1];
        // check if it's a roman numeral
        if (!(curr in values)) {
            return "This is not a roman numeral";
        }
        
        // repeats
        if (i > 0 && values[prev] == values[curr]) {
            repeat++;
            if (curr == "I" || curr == "X" || curr == "C" || curr == "M") {
                if (repeat > 3) {
                    return "Numeral contains an invalid repetition.";
                } else {
                    // how are you doing today? :) 
                }
            } else if (repeat > 1) {
                return "Numeral contains an invalid repetition.";
            }
        } else {
            repeat = 1;
        }

        // subtraction
        if (i + 1 < s.length && values[curr] < values[next]) {
            if (curr == "I" || curr == "X" || curr == "C") {
                if (ids[next] - ids[curr] <= 2) {
                    if (repeat == 1) {
                        total += values[next] - values[curr];
                        i += 1;
                        repeat = 1;
                    } else {
                        return "Numeral contains an invalid subtraction.";
                    }
                } else {
                    return "Numeral contains an invalid subtraction.";
                }
            } else {
                return "Numeral contains an invalid subtraction.";
            }
        } else {
            total += values[curr];
        }
    }
    return total;
};

let roman = prompt("Give me a roman numeral and i'll convert it to an integer: ");
console.log(romanToInt(roman));
