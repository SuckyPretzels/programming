/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let stack2 = [];
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
        case "(":
            stack.push(s[i]);
            break;
        case "[":
            stack.push(s[i]);
            break;
        case "{":
            stack.push(s[i]);
            break;
        }

        if (s[i] === ")") {
            if (stack[stack.length-1] === "(") {
                stack.pop();
            } else {
                stack2.push(s[i]);
            }
        }
        if (s[i] === "]") {
            if (stack[stack.length-1] === "[") {
                stack.pop();
            } else {
                stack2.push(s[i]);
            }
        }
        if (s[i] === "}") {
            if (stack[stack.length-1] === "{") {
                stack.pop();
            } else {
                stack2.push(s[i]);
            }
        }
    }
    if (stack.length === 0 && stack2.length === 0) {
        return true;
    } else {
        return false;
    }
};
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([])")); // true
console.log(isValid("([)]")); // false
console.log(isValid("]")); // false
console.log(isValid("(])")); // false
