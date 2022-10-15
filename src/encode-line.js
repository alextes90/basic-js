const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    const result = [];
    const hellperArr = str.split("");
    while (hellperArr.length > 0) {
        let counter = 1;
        while (hellperArr[0] === hellperArr[1]) {
            counter++;
            hellperArr.splice(0, 1);
        }
        let deletedLetter = hellperArr.splice(0, 1);
        result.push(`${counter > 1 ? counter + deletedLetter : deletedLetter}`);
    }
    return result.join("");
}

module.exports = {
    encodeLine,
};
