export function Mode(numbers: number[]): number[] {
    const freqMap: Record<number, number> = {};
    let maxCount = 0;

    for (const num of numbers) {
        freqMap[num] = (freqMap[num] || 0) + 1;
        if (freqMap[num] > maxCount) {
            maxCount = freqMap[num];
        }
    }

    const modes = Object.entries(freqMap)
        .filter(([, count]) => count === maxCount)
        .map(([num]) => Number(num));

    return modes.length === Object.keys(freqMap).length ? [] : modes;
}
