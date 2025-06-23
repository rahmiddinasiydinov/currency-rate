import { useState } from "react";
import { InputAmount } from "./InputAmount";
import CurrencySelectDropdown from "./CurrencySelectDropDown";


export default function CurrencyConverter() {
    const [amount, setAmount] = useState("");
    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("EUR");

    return <section className="flex justify-center w-full mx-auto mt-10">
        <div className="p-4 bg-white rounded-2xl shadow-xl">
            <div className="md:grid md:grid-cols-3 gap-3">
                <div className="">
                    <InputAmount amount={amount} setAmount={setAmount} />
                </div>
                <div className="col-span-2 relative grid grid-cols-2 gap-3 mt-3 md:mt-0">
                    <CurrencySelectDropdown currency={from} setCurrency={setFrom} label="From" />
                    <button className="absolute block bg-white w-11 h-11 left-1/2 top-1/2 -translate-1/2  rounded-full border border-gray-300 hover:bg-gray-100 cursor-pointer">
                        <i className="fa-solid fa-arrow-right-arrow-left"></i>
                    </button>
                    <CurrencySelectDropdown currency={to} setCurrency={setTo} label="To" />
                </div>
            </div>
            <div className="pt-5 flex justify-between">
                <div className="flex flex-col">
                    <span className="text-2xl font-bold text-gray-600">1 USD Dollar - {12544}UZS</span>
                    <span className="text-md mt-2 text-gray-600">1 USD Dollar - {12544}UZS</span>
                    <span className="text-md text-gray-600">1 USD Dollar - {12544}UZS</span>
                </div>
                <div >
                    <button className="px-7 py-3 bg-blue-700 rounded-full text-white hover:bg-blue-900 cursor-pointer" >Convert</button>
                </div>
            </div>
        </div>


    </section>
}