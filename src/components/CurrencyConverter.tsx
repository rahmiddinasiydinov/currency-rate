import { useEffect, useState } from "react";
import { InputAmount } from "./InputAmount";
import CurrencySelectDropdown from "./CurrencySelectDropDown";
import { fetchBaseExchangeRate, fetchTargetExchangeRate, getValidCurrencies, type Icurrency } from "../utils/fetches";

interface IRate {
    baseCurrency: Icurrency | undefined,
    targetCurrency: Icurrency | undefined,
    exchangeRate: number,
    baseRate: number,
    targetRate: number,
    amount: number
}


export default function CurrencyConverter() {
    const [amount, setAmount] = useState<number | undefined>();
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [rate, setRate] = useState<IRate | undefined>(undefined);
    const [isToValid, setIsToValid] = useState(true);
    const [isFromValid, setIsFromValid] = useState(true);

    const currencies = getValidCurrencies();
    function onFromChange(value: string) {
        if (value == to) {
            setTo(from)
            setFrom(value);
        } else {
            setFrom(value)
        }
    }

    function onToChange(value: string) {
        if (value == from) {
            setFrom(to)
            setTo(value);
        } else {
            setTo(value)
        }
    }

    function onSwapClick() {
        const temporaryHolder = from;
        setFrom(to);
        setTo(temporaryHolder)
    }

    function validateDropdowns(from:string, to:string){
        const currencies = getValidCurrencies();
        let areDropDownsValid = true;
        if(currencies.some( currency => currency.code == from)){
            setIsFromValid(true)
        } else{
            areDropDownsValid = false;
            setIsFromValid(false)
        }

         if(currencies.some( currency => currency.code == to)){
            setIsToValid(true)
        } else{
            areDropDownsValid = false;
            setIsToValid(false)
        }

        return areDropDownsValid
    }

    useEffect(() => {
        validateDropdowns(from, to)
    }, [to, from])

    async function handleSubmit() {
        const areDropDownsValid = validateDropdowns(from, to)
        if (( amount || amount == 0) && areDropDownsValid) {
            const resultBaseRate: number = await fetchBaseExchangeRate(from, to);
            const resultTargetRate: number = await fetchTargetExchangeRate(from, to);

            const baseCurrency: (Icurrency | undefined) = currencies.find(currency => currency.code == from)
            const targetCurrency: ((Icurrency | undefined)) = currencies.find(currency => currency.code == to)
            const currentRate: IRate = { baseCurrency, targetCurrency, exchangeRate: 0, baseRate: resultBaseRate, targetRate: resultTargetRate, amount: amount };
            currentRate.exchangeRate = resultBaseRate * amount;
            setRate(currentRate);

        }
        else {
            console.log("Please choose base and target currencies");

        }
    }


    return <section className="flex justify-center w-full mx-auto mt-10">
        <div className="p-4 bg-white rounded-2xl shadow-xl">
            <div className="md:grid md:grid-cols-3 gap-3">
                <div className="">
                    <InputAmount setAmount={setAmount} baseCurrency={from}/>
                </div>
                <div className="col-span-2 relative grid grid-cols-2 gap-3 mt-3 md:mt-0">
                    <CurrencySelectDropdown
                        currency={from}
                        label="From"
                        value={from}
                        onChange={onFromChange}
                        isValueValid={isFromValid}
                    />

                    <button
                        className="absolute block bg-white w-11 h-11 left-1/2 top-1/2 -translate-1/2  rounded-full border border-gray-300 hover:bg-gray-100 cursor-pointer z-2"
                        onClick={onSwapClick}
                    >
                        <i className="fa-solid fa-arrow-right-arrow-left"></i>
                    </button>

                    <CurrencySelectDropdown
                        currency={to}
                        label="To"
                        value={to}
                        onChange={onToChange}
                        isValueValid={isToValid}
                    />


                </div>
            </div>
            <div className="pt-5 flex justify-between">
                <div className="flex flex-col">
                   {rate && <>
                        <span className="text-2xl font-bold text-gray-600">{rate?.amount} {rate?.baseCurrency?.code} - {rate?.exchangeRate} {rate?.targetCurrency?.code}</span>
                        <span className="text-md mt-2 text-gray-600">1 {rate?.baseCurrency?.code} - {rate?.baseRate} {rate?.targetCurrency?.code}</span>
                        <span className="text-md text-gray-600">1 {rate?.targetCurrency?.code} - {rate?.targetRate} {rate?.baseCurrency?.code}</span>
                    </>} 
                </div>
                <div >
                    <button className="px-7 py-3 bg-blue-700 rounded-full text-white hover:bg-blue-900 cursor-pointer" onClick={handleSubmit}>Convert</button>
                </div>
            </div>
        </div>


    </section>
}