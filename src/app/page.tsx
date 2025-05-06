"use client"
import {useState, ChangeEvent, FormEvent} from 'react';
import {Mean} from "@/lib/mean";
import {Range} from "@/lib/range";
import {sampleVariance, Variance} from "@/lib/variance";
import {frequency} from "@/lib/frequency";
import {Mode} from "@/lib/mode";
import {quartiles} from "@/lib/interquartileRange";

export default function Home() {
    const [input, setInput] = useState('');
    const [data, setData] = useState<number[]>([]);
    const [results, setResults] = useState<Record<string, any>>({});

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setInput(e.target.value);
    };
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const arr = input
            .split(/[\s,;]+/)
            .map((v) => parseFloat(v))
            .filter((v) => !isNaN(v));
        setData(arr);

        setResults({
            mean: Mean(arr),
            range: Range(arr),
            variancePopulation: Variance(arr),
            varianceSample: sampleVariance(arr),
            mode: Mode(arr),
            quartiles: quartiles(arr),
            // stdDevPopulation: stdDev(arr, true),
            // stdDevSample: stdDev(arr, false),
            // semiIQR: semiInterquartileRange(arr),
            // moment2: moment(arr, 2),
            // moment3: moment(arr, 3),
        });
    };

    return (
        <main className="p-8 max-w-xl mx-auto ">
            <h1 className="text-2xl font-bold mb-4">محاسبات آماری </h1>
            <form onSubmit={handleSubmit} className="mb-6">
                <label className="block mb-2">
                    داده‌ها (عددها را با فاصله، ویرگول یا سمی‌کالن جدا کنید):
                </label>
                <textarea
                    className="w-full border rounded p-2 bg-gray-800"
                    rows={3}
                    value={input}
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                >
                    محاسبه
                </button>
            </form>

            {data.length > 0 && (
                <section className="  border p-2 rounded-2xl bg-neutral-800 shadow-2xl shadow-gray-900  ">
                    <h2 className="text-xl font-semibold mb-2">نتایج:</h2>
                    <ul className="list-disc list-inside font-bold *:mb-2   ">
                        <li>میانگین: {results.mean.toFixed(3)}</li>
                        <li>دامنه تغییرات: {Math.round(results.range)}</li>
                        <li>واریانس (جامعه): {results.variancePopulation.toFixed(1)}</li>
                        <li>واریانس (نمونه): {results.varianceSample.toFixed(3)}</li>
                        <li>
                            مُد: {Array.isArray(results.mode) ? results.mode.join(', ') : results.mode}
                            {/*مُد: { results}*/}
                        </li>
                        <li>چارک اول: {results.quartiles.Q1}</li>
                        <li>چارک دوم: {results.quartiles.Q2}</li>
                        <li>چارک سوم: {results.quartiles.Q3}</li>
                        {/*<li>انحراف معیار (جامعه): {results.stdDevPopulation.toFixed(4)}</li>*/}
                        {/*<li>انحراف معیار (نمونه): {results.stdDevSample.toFixed(4)}</li>*/}
                        {/*<li>انحراف چارکی (نیم‌گستره): {results.semiIQR.toFixed(4)}</li>*/}
                        {/*<li>گشتاور مرتبه 2: {results.moment2.toFixed(4)}</li>*/}
                        {/*<li>گشتاور مرتبه 3: {results.moment3.toFixed(4)}</li>*/}
                    </ul>
                </section>
            )}
            <p className="w-full text-center mt-4 font-bold  text-sm">hazhir mohammadi</p>
        </main>
    );
}
