import { useDispatch } from "react-redux"
import { removeMonogram } from "../../../../redux/monogramsSlice"
import { downloadMonogram } from "../../../../services/monograms"
import { removeMonogramFromLocalStorage } from "../../../../utils/localStorage"

export default function MonogramCard({ monogram }) {
    const dispatch = useDispatch()

    const downloadCurrentMonogram = () => {
        const currentMonogram = {
            first_letter: monogram.first_letter,
            second_letter: monogram.second_letter,
            text_color: monogram.text_color,
            background_color: monogram.background_color,
        }

        downloadMonogram(currentMonogram)
    }

    const removeMonogramById = () => {
        dispatch(removeMonogram({ id: monogram.id }))
        removeMonogramFromLocalStorage(monogram.id)
    }

    return (
        <div className="col-sm-6 p-2">
            <div className="border p-3">
                <p><b>First Letter:</b> {monogram.first_letter}</p>
                <p><b>Second Letter:</b> {monogram.second_letter}</p>
                <p><b>Text Color:</b> {monogram.text_color}</p>
                <p><b>Background Color:</b> {monogram.background_color}</p>
                <div>
                    <button onClick={downloadCurrentMonogram} type="button" className="btn btn-primary me-3">Download</button>
                    <button onClick={removeMonogramById} type="button" className="btn btn-danger">Remove</button>
                </div>
            </div>
        </div>
    )
}
