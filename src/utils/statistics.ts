export type Data = number[];

export function mean(data: Data): number {
    if (data.length === 0) return 0;
    const sum = data.reduce((a, b) => a + b, 0);
    return sum / data.length;
}


export function range(data: Data): number {
    if (data.length === 0) return 0;
    return Math.max(...data) - Math.min(...data);
}

export function variance(data: Data, population = true): number {
    if (data.length === 0) return 0;
    const μ = mean(data);
    const denom = population ? data.length : data.length - 1;
    return data.reduce((sum, x) => sum + (x - μ) ** 2, 0) / denom;
}

export function mode(data: Data): number[] {
    const freq = new Map<number, number>();
    data.forEach(x => freq.set(x, (freq.get(x) || 0) + 1));
    let maxCount = 0;
    freq.forEach(count => { if (count > maxCount) maxCount = count; });
    const modes = Array.from(freq.entries())
        .filter(([_, count]) => count === maxCount)
        .map(([value]) => value);
    return modes;
}


export function stdDev(data: Data, population = true): number {
    return Math.sqrt(variance(data, population));
}


function quartiles(data: Data): { q1: number; q3: number } {
    const sorted = [...data].sort((a, b) => a - b);
    const mid = sorted.length / 2;
    const lower = sorted.slice(0, Math.floor(mid));
    const upper = sorted.slice(Math.ceil(mid));
    const q1 = median(lower);
    const q3 = median(upper);
    return { q1, q3 };
}

export function median(data: Data): number {
    if (data.length === 0) return 0;
    const sorted = [...data].sort((a, b) => a - b);
    const m = sorted.length;
    if (m % 2 === 1) return sorted[(m - 1) / 2];
    return (sorted[m / 2 - 1] + sorted[m / 2]) / 2;
}

export function semiInterquartileRange(data: Data): number {
    if (data.length < 2) return 0;
    const { q1, q3 } = quartiles(data);
    return (q3 - q1) / 2;
}

export function moment(data: Data, k: number = 1, population = true): number {
    if (data.length === 0) return 0;
    const μ = mean(data);
    const denom = population ? data.length : data.length - 1;
    return data.reduce((sum, x) => sum + (x - μ) ** k, 0) / denom;
}

export function getQuartiles(data: number[]) {
    if (data.length === 0) throw new Error("Empty array!");

    const sorted = [...data].sort((a, b) => a - b);

    const getQuartile = (arr: number[], q: number): number => {
        const pos = (arr.length - 1) * q;
        const base = Math.floor(pos);
        const rest = pos - base;

        if (arr[base + 1] !== undefined) {
            return arr[base] + rest * (arr[base + 1] - arr[base]);
        } else {
            return arr[base];
        }
    };

    const Q1 = getQuartile(sorted, 0.25);
    const Q2 = getQuartile(sorted, 0.5);
    const Q3 = getQuartile(sorted, 0.75);

    return { Q1, Q2, Q3 };
}
