/**
 * Computes the frequency distribution of values in a numeric array
 * without using higher-order array methods.
 *
 * @param numbers - An array of numbers to analyze.
 * @returns An object where each key is a unique number from the input
 *          and its value is the count of how many times it appears.
 *          [3, 7, 7, 2]
 */
export function frequency(numbers: number[]): Record<number, number> {
    const freqMap: Record<number, number> = {};

    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        if (freqMap[num] !== undefined) {
            freqMap[num] += 1;
        } else {
            freqMap[num] = 1;
        }
    }

    return freqMap;
}
