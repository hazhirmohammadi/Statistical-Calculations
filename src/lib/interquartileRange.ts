export  function quartiles(numbers: number[]) {
    const sorted = [...numbers].sort((a, b) => a - b);

    const q1 = getQuartile(sorted, 0.25);
    const q2 = getQuartile(sorted, 0.5);
    const q3 = getQuartile(sorted, 0.75);

    const iqr = q3 - q1;

    return {
        Q1: q1,
        Q2: q2,
        Q3: q3,
        IQR: iqr
    };
}


function getQuartile(sorted: number[], q: number): number {
    const pos = (sorted.length - 1) * q;
    const base = Math.floor(pos);
    const rest = pos - base;

    if (sorted[base + 1] !== undefined) {
        return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
    } else {
        return sorted[base];
    }
}