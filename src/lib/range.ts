/**
 * Calculates the range (difference between maximum and minimum) of a numeric array.
 *
 * @param numbers - An array of numbers.
 * @returns The difference between the highest and lowest values. Returns 0 if the array is empty.
 */
export function Range(numbers: number[]): number {
    const n = numbers.length;
    if (n === 0) return 0;

    let min = numbers[0];
    let max = numbers[0];

    for (let i = 1; i < n; i++) {
        const val = numbers[i];
        if (val < min) min = val;
        if (val > max) max = val;
    }

    return max - min;
}
