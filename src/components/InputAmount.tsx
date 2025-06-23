interface IAmountProps {
    amount: string,
    setAmount: (value: string) => void
}

export function InputAmount({ amount, setAmount }: IAmountProps) {
    return <div className="flex flex-col p-4 border border-gray-300 hover:bg-gray-100 rounded-lg cursor-pointer">
        <label htmlFor="amount" className="text-sm text-gray-500">Amount</label>
        <span className="text-2xl font-bold">
            $
        <input
            className="outline-none bg-transparent"
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}

        />
        </span>
    </div>
}