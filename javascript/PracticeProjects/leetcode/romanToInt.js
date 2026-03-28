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
        // repeats
        if (i > 0 && values[curr] == values[prev]) {
            repeat++;
            if (curr == "I" || curr == "X" || curr == "C" || curr == "M") {
                if (repeat > 3) {
                    console.log("Numeral contains an invalid repetition.");
                    return;
                } else {
                    // how are you doing today? :) 
                }
            } else if (repeat > 1) {
                console.log("Numeral contains an invalid repetition.");
                return;
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
                        console.log("Numeral contains an invalid subtraction.");
                        return;
                    }
                } else {
                    console.log("Numeral contains an invalid subtraction.");
                    return;
                }
            } else {
                console.log("Numeral contains an invalid subtraction.");
                return;
            }
        } else {
            total += values[curr];
        }
    }
    return total;
};

let roman = prompt("Give me a roman numeral: ");
console.log(romanToInt(roman));
