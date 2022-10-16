const { NotImplementedError } = require("../extensions/index.js");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
 function isMAC48Address(n) {
    const nArr = n.split("-");
    console.log(nArr);
    if (nArr.length === 6) {
        for (let el of nArr) {
            const chekingArr = [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
            ];
            if (
                chekingArr.indexOf(el[0]) >= 0 &&
                chekingArr.indexOf(el[1]) >= 0
            ) {
                console.log(el);
                continue;
            } else return false;
        }
    } else return false;
    return true;
}
module.exports = {
    isMAC48Address,
};
