import { useState } from "react"
import Counter from "../components/Counter"

export default function CounterPage() {
    const [cnt, setCnt] = useState(100)
    const [liftItem, setLiftItem] = useState(0)

    function cntUp() {
        setCnt((cnt) => cnt + 1)
    }

    function liftUp(data) {
        setLiftItem((x) => x + data)
    }

    return (
        <div className="min-h-screen bg-slate-600 p-4">
            <div className="max-w-md mx-auto">
                <Counter cnt={cnt} cntUp={cntUp} liftUp={liftUp} />
                <div className="mt-4 bg-white shadow-md rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2 text-gray-700">Lifted Item</h3>
                    <p className="text-3xl font-bold text-gray-800">{liftItem}</p>
                </div>
            </div>
        </div>
    )
}