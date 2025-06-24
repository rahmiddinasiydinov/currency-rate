import { useEffect, useState } from "react"

interface IAmountProps {
    setAmount: (value: number) => void,
    baseCurrency: string
}

export function InputAmount({ setAmount, baseCurrency }: IAmountProps) {
    const [isValueValid, setIsValueValid] = useState(true)
    const [value, setValue] = useState('');
    const [formattedValue, setFormattedValue] = useState<string | number>('')
    const [displayValue, setDisplayValue] = useState<string|number>('');

    function handleChange(value: any) {
        setValue(value)
        setDisplayValue(value)

        const parsedIntValue = parseInt(value);
        if (parsedIntValue || parsedIntValue == 0) {
            console.log(parsedIntValue);
            const formattedValue = formatValue(parsedIntValue)
            setFormattedValue(formattedValue)
            setAmount(parsedIntValue)
            setIsValueValid(true)
        } else {
            setIsValueValid(false)
            setFormattedValue(value)
        }

        if(value==''){
            setIsValueValid(true)
        }
    }

    useEffect(() => {
        const parsedIntValue = parseInt(value)
        if (baseCurrency && (parsedIntValue || parsedIntValue == 0)) {
            const formattedValue = formatValue(parsedIntValue)
            setFormattedValue(formattedValue);
            setDisplayValue(formattedValue)
        } 
    }, [baseCurrency])

    const formatValue = (value: number) => (baseCurrency && baseCurrency !="USDT") ? new Intl.NumberFormat('en-US', { style: 'currency', currency: baseCurrency, maximumSignificantDigits: 3 })
        .format(value) : value

    function handleFocus(){
        setDisplayValue(value)
    }

    function handleBlur(){
        setDisplayValue(formattedValue)
    }

    return <> <div className="flex flex-col p-4 border border-gray-300 hover:bg-gray-100 rounded-lg cursor-pointer">
        <label htmlFor="amount" className="text-sm text-gray-500">Amount</label>
        <span className="text-2xl font-bold">
            {/* <span className="w-4 inline-block">{getCurrencyIcon()}</span> */}
            <input
                className="outline-none bg-transparent"
                type="text"
                value={displayValue}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(e) => handleChange(e.target.value)}

            />
        </span>
    </div>
        <p className="text-red-700">{!isValueValid && <>Please Enter a valid amount</>}</p>
    </>
}