import { useSelector } from "react-redux"
import MonogramCard from "./components/MonogramCard/MonogramCard"

export default function Monograms() {
    const { monograms } = useSelector(state => state.monograms)

    return (
        <main className="p-3">
            {monograms.length === 0 ? (
                <p className="bg-warning p-3 mb-0">No monograms here, go create some.</p>
            ) : (
                <div className="row m-0">
                    {monograms.map(monogram => (
                        <MonogramCard key={monogram.id} monogram={monogram} />
                    ))}
                </div>
            )}
        </main>
    )
}
