const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matr) {
    console.log(matr);
    const resultMatrix = JSON.parse(JSON.stringify(matr));
    console.log(resultMatrix);
    const rows = matr.length;
    const columns = matr[0].length;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            let counter = 0;
            if (matr[i][j - 1]) {
                counter++;
            }
            if (matr[i][j + 1]) {
                counter++;
            }
            if (matr[i - 1] && matr[i - 1][j - 1]) {
                counter++;
            }
            if (matr[i - 1] && matr[i - 1][j]) {
                counter++;
            }
            if (matr[i - 1] && matr[i - 1][j + 1]) {
                counter++;
            }
            if (matr[i + 1] && matr[i + 1][j - 1]) {
                counter++;
            }
            if (matr[i + 1] && matr[i + 1][j]) {
                counter++;
            }
            if (matr[i + 1] && matr[i + 1][j + 1]) {
                counter++;
            }
            resultMatrix[i][j] = counter;
        }
    }
    return resultMatrix;
}

module.exports = {
    minesweeper,
};
