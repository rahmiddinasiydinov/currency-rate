export default function CurrencyRateHistory() {
    return <>
        <div className=" w-[90%] md:w-[50%] mx-auto rounded-2xl overflow-hidden bg-gray-200 mt-5 shadow-md">
            <h3 className="text-center text-blue-900 text-lg ">Previous checks</h3>
            <ul>
                <li className="flex justify-between bg-gray-200 py-2 border-t-1 border-t-gray-300">
                    <div className="text-center text-blue-900 grow text-lg font-medium uppercase">From</div>
                    <div className="text-center text-blue-900 grow text-lg font-medium uppercase">To</div>
                </li>
                <li className="flex justify-between bg-gray-100 py-2 border-t-1 border-t-gray-200">
                    <div className="text-center text-blue-700 grow">2</div>
                    <div className="text-center text-blue-700 grow">25533</div>
                </li>
                <li className="flex justify-between bg-gray-100 py-2 border-t-1 border-t-gray-200">
                    <div className="text-center text-blue-700 grow">1</div>
                    <div className="text-center text-blue-700 grow">123432</div>
                </li>
            </ul>
        </div>
    </>
}