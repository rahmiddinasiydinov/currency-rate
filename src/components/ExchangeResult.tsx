import type { IRate } from "./CurrencyConverter";

interface IPropTypes {
    rate: IRate | undefined
}
export default function ExchangeResult({rate}:IPropTypes) {
    return <div className="flex flex-col">
        {rate && <>
            <span className="text-2xl font-bold text-gray-600">{rate?.amount} {rate?.baseCurrency?.code} - {rate?.exchangeRate} {rate?.targetCurrency?.code}</span>
            {rate?.baseRate && <span className="text-md mt-2 text-gray-600">1 {rate?.baseCurrency?.code} - {rate?.baseRate} {rate?.targetCurrency?.code}</span>}
            {rate?.targetRate && <span className="text-md text-gray-600">1 {rate?.targetCurrency?.code} - {rate?.targetRate} {rate?.baseCurrency?.code}</span>}
        </>}
    </div>
}