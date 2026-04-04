/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let common = "";
    for (let j = 0; j < strs[0].length; j++) {
        for (let i = 1; i < strs.length; i++) {
            if (strs[i][j] !== strs[0][j]) {
                return common;
            }
        }
        common += strs[0][j];
    }
    return common;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix(["a"]));
console.log(longestCommonPrefix(["aaa","aa","aaaa"]));

