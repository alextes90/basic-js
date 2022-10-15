const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
    let arrN = `${n}`.split("");
    console.log(arrN);
    const hellperArr = [];
    for (let i = 0; i < arrN.length; i++) {
        const hellperArr2 = [...arrN];
        hellperArr2.splice(i, 1);
        console.log(hellperArr2);
        hellperArr.push(+hellperArr2.join(""));
    }
    return hellperArr.sort((a, b) => b - a)[0];
}

module.exports = {
    deleteDigit,
};
