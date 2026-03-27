const prompt = require('prompt-sync')({ sigint: true });

/**
 * @param {string} s
 * @return {number}
 */



let roman = "MDCLXVI";
var romanToInt = function(s) {
    s = s.toUpperCase();
    let total = 0;
    const values = {
        I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
    };
    const ids = {
        I: 1, V: 2, X: 3, L: 4, C: 5, D: 6, M: 7
    };
    
    for (let i = 0; i < s.length; i++) {
        // subtraction
        if (i + 1 < s.length && values[s[i]] < values[s[i+1]]) {
            if (s[i] == "I" || s[i] == "X" || s[i] == "C") {
                if (ids[s[i+1]] - ids[s[i]] <= 2) {
                    total += values[s[i+i]] - values[s[i]];
                    i += 1;
                }
            } else {
                console.log("Numeral contains an invalid subtraction.");
                return;
            }
        } else {
            total += values[s[i]];
        }
    }
    console.log(total);
};

romanToInt(roman);
