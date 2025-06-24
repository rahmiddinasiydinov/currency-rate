import { type ICheckData } from "../utils/localstorage"
import { useLocalStorage } from "@uidotdev/usehooks";

export default function CurrencyRateHistory() {
    const [previousChecks] =useLocalStorage<ICheckData[]>('previousChecks',[])

    return <>
        <div className=" w-[90%] md:w-[50%] mx-auto rounded-2xl overflow-hidden bg-gray-200 mt-5 shadow-md">
            <h3 className="text-center text-blue-900 text-lg ">Previous checks</h3>
            <ul>
                <li className="flex justify-between bg-gray-200 py-2 border-t-1 border-t-gray-300">
                    <div className="pl-[20%] text-blue-900 w-[50%] text-lg font-medium uppercase">From</div>
                    <div className="pl-[10%] text-blue-900 w-[50%] text-lg font-medium uppercase">To</div>
                </li>
                <div className="overflow-auto max-h-40 " >
                {previousChecks && previousChecks.map((check, i) => {
                    return <li key={i} className="flex justify-between bg-gray-100 py-2 border-t-1 border-t-gray-200">
                        <div className="pl-[20%] text-blue-700 w-[50%]">{check.baseAmount} {check.base}</div>
                        <div className="pl-[10%] text-blue-700 w-[50%]">{check.targetAmount} {check.target}</div>
                    </li>
                })}
                </div>


            </ul>
        </div>
    </>
}