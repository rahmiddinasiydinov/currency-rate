import { useEffect, useState } from "react"
import { getValidCurrencies } from "../utils/fetches"

interface ICurrencyProps {
    label: string,
    currency: string,
    value: string,
    onChange: (value: string) => void,
    isValueValid: boolean
}

export default function CurrencySelectDropdown({ currency, label, onChange, isValueValid }: ICurrencyProps) {
    const [input, setInput] = useState('')
    const [focused, setFocused] = useState(false);
    const currencies = getValidCurrencies()


    function handleSelect(value: string) {
        if(currencies.some(currency => currency.code == value)){
            setInput(value)
            onChange(value)
        }
    }

    function handleBlur(){
        setTimeout(() => setFocused(false), 300)
    }


    useEffect(() => {
        setInput(currency)
    }, [currency])

    const getCurrencyType = () => label.toLowerCase()=='from' ? 'base' : 'target'

    return <div><div id={label} className="relative flex flex-col p-4 border border-gray-300 hover:bg-gray-100 rounded-lg cursor-pointer focus:outline-blue-400">
        <label htmlFor="amount" className="text-sm text-gray-500">{label}</label>
        <span className="text-2xl">
            <input
                className="outline-none bg-transparent"
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={handleBlur}
                readOnly
            />
        </span>
        {focused && <div className="absolute left-0 top-[calc(100%+3px)] w-[100%] bg-white shadow-md rounded-md">
            {
                currencies.map(currency => {
                    return <div className="p-4 py-1  hover:bg-gray-100" key={currency.code} onClick={() => handleSelect(currency.code)}>
                        <span className="mr-3 w-15 inline-block" >{currency.code}</span>
                        {currency.description}
                    </div>
                })
            }

        </div>}
    </div>
        <p className="text-red-700">{!isValueValid && <>Please choose {getCurrencyType()} currency</>}</p>
    </div>
}