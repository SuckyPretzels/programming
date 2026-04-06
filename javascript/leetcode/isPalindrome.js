/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = String(x);
    let forward = [];
    let backward = [];
    for (let i = 0; i < x.length; i++) {
        backward += x[x.length-1-i];
        forward += x[i];
    }
    return forward === backward ? true : false;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
