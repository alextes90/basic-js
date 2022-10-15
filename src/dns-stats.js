const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
    const result = {};
    for (let el of domains) {
        const hellperArr = el.split(".").reverse();
        console.log(hellperArr);
        while (hellperArr.length > 0) {
            console.log(hellperArr);
            result[`.${hellperArr[0]}`]
                ? (result[`.${hellperArr[0]}`] += 1)
                : (result[`.${hellperArr[0]}`] = 1);
            let delettedEl = hellperArr.splice(0, 1);
            if (hellperArr.length > 0) {
                hellperArr[0] = `${delettedEl}.${hellperArr[0]}`;
            }
        }
    }
    return result;
}

module.exports = {
    getDNSStats,
};
