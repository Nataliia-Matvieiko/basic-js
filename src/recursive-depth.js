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
    calculateDepth(arr, initialLength = 1) {
        let result = initialLength;
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                const length = this.calculateDepth(arr[i], initialLength + 1);
                if (length > result) {
                    result = length;
                }
            }
        }
        return result;
    }
}

module.exports = {
    DepthCalculator
};
