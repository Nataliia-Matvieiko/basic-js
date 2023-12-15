/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
    let catCount = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let n = 0; n < matrix[i].length; n++) {
            if (matrix[i][n] === '^^') {
                catCount++;
            }
        }
    }
    return catCount;
}

module.exports = {
    countCats
};
