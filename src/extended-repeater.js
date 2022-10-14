const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, option) {
    let result = "";
    if (option.addition === undefined) {
        result += `${str}${!option.separator ? "+" : option.separator}`.repeat(
            option.repeatTimes > 0 ? option.repeatTimes - 1 : 0
        );
        result += `${str}`;
    } else {
        let optionalString = "";
        optionalString += `${option.addition}${
            !option.additionSeparator ? "|" : option.additionSeparator
        }`.repeat(
            option.additionRepeatTimes > 0 ? option.additionRepeatTimes - 1 : 0
        );
        optionalString += option.addition;
        result += `${str + optionalString}${
            !option.separator ? "+" : option.separator
        }`.repeat(option.repeatTimes > 0 ? option.repeatTimes - 1 : 0);
        result += `${str + optionalString}`;
    }

    return result;
}

module.exports = {
    repeater,
};
