const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    counter = 0;

    calculateDepth(arr, index = 0) {
        if (index === 0) {
            this.counter = 1;
            index = 1;
        }
        if (index > this.counter) this.counter = index;
        for (let el of arr)
            if (Array.isArray(el)) {
                this.calculateDepth(el, index + 1);
            }

        return this.counter;
    }
}

module.exports = {
    DepthCalculator,
};
