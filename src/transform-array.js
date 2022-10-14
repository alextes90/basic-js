const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    if (!(arr instanceof Array)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }

    const resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "--discard-prev") {
            if (arr[i - 2] === "--discard-next") {
                continue;
            }
            resultArr.pop();
        } else if (arr[i] === "--discard-next") {
            i++;
        } else if (arr[i] === "--double-next") {
            resultArr.push(arr[i + 1]);
        } else if (arr[i] === "--double-prev") {
            if (arr[i - 2] === "--discard-next") {
                continue;
            }
            resultArr.push(arr[i - 1]);
        } else {
            resultArr.push(arr[i]);
        }
    }
    const finalArr = [];
    for (let el of resultArr) {
        if (
            el === "--double-prev" ||
            el === "--discard-prev" ||
            el === "--double-next" ||
            el === "--discard-next" ||
            !el
        ) {
            continue;
        }

        finalArr.push(el);
    }

    return finalArr;
}

module.exports = {
    transform,
};
