interface ICurrencyProps{
    label:string,
    currency: string,
    setCurrency: (value: string) => void
}

export default function CurrencySelectDropdown({currency, setCurrency, label}: ICurrencyProps) {
    return <div className="flex flex-col p-4 border border-gray-300 hover:bg-gray-100 rounded-lg cursor-pointer">
        <label htmlFor="amount" className="text-sm text-gray-500">{label}</label>
        <span className="text-2xl">
            flag
        <input
            className="outline-none bg-transparent"
            type="text"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}

        />
        </span>
    </div>
}