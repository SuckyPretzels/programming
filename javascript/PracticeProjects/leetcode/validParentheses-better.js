/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let item = s[i];
        if (item === "(" || item === "[" || item === "{") {
            stack.push(item);
        } else {
            let firstItem = stack[stack.length-1];
            if ((item === ")" && firstItem === "(") ||
                (item === "]" && firstItem === "[") ||
                (item === "}" && firstItem === "{"))
            {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0 ? true : false;
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([])")); // true
console.log(isValid("([)]")); // false
console.log(isValid("]")); // false
console.log(isValid("(])")); // false
