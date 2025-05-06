/**
 * Calculates the arithmetic mean (average) of an array of numbers.
 *
 * @param numbers - An array of numeric values.
 * @returns The average of the input numbers. Returns 0 if the array is empty.
 */
export function Mean(numbers: number[]): number {
    const n = numbers.length;
    if (n === 0) return 0;

    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += numbers[i];
    }

    return sum / n;
}
