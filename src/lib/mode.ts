export function Mode(numbers: number[]): number[] {
    const freqMap: Record<number, number> = {};
    let maxCount = 0;

    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        if (freqMap[num] !== undefined) {
            freqMap[num]++;
        } else {
            freqMap[num] = 1;
        }

        if (freqMap[num] > maxCount) {
            maxCount = freqMap[num];
        }
    }

    const modes: number[] = [];
    for (const key in freqMap) {
        if (freqMap[key] === maxCount) {
            modes.push(Number(key));
        }
    }

    return modes;
}
