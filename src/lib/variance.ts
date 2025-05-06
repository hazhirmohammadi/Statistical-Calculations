import {Mean} from "@/lib/mean";

/**
 * Calculates the sample variance of an array of numbers.
 *
 * Sample variance is defined as the sum of squared deviations from the mean,
 * divided by (n - 1), where n is the sample size:
 *
 *   s² = (1 / (n - 1)) * Σ (xi - x̄)²
 *
 * This estimator is unbiased for the population variance when sampling from a larger population.
 *
 * @param numbers - An array of numeric sample values.
 * @returns The sample variance. Returns 0 if the array has fewer than 2 elements.
 */
export function sampleVariance(numbers: number[]): number {
    const n = numbers.length;
    if (n < 2) return 0;

    const mean = Mean(numbers)

    let sumOfSquaredDiffs = 0;
    for (let i = 0; i < n; i++) {
        const diff = numbers[i] - mean;
        sumOfSquaredDiffs += Math.pow(diff, 2);
    }

    return sumOfSquaredDiffs / (n - 1);
}


export function Variance(numbers: number[]): number {
    const n = numbers.length;
    if (n === 0) return 0;

    const mean = Mean(numbers)

    let sumOfSquaredDiffs = 0;
    for (let i = 0; i < n; i++) {
        const diff = numbers[i] - mean;
        sumOfSquaredDiffs += Math.pow(diff, 2);
    }

    return sumOfSquaredDiffs / n;
}


