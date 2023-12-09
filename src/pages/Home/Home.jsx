import { useDispatch } from 'react-redux'
import { addMonogram } from "../../redux/monogramsSlice";
import { downloadMonogram } from "../../services/monograms"
import { addMonogramToLocalStorage } from "../../utils/localStorage";
import useMultipleRefs from "../../hooks/useMultipleRefs";

export default function Home() {
    const [firstLetterRef, secondLetterRef, textColorRef, backgroundColorRef] = useMultipleRefs(4)
    const dispatch = useDispatch()

    const generateMonogram = (e) => {
        e.preventDefault()
        const monogramId = Date.now()
        const currentMonogram = {
            first_letter: firstLetterRef.current.value,
            second_letter: secondLetterRef.current.value,
            text_color: textColorRef.current.value,
            background_color: backgroundColorRef.current.value,
        }

        downloadMonogram(currentMonogram)
        addMonogramToLocalStorage({
            id: monogramId,
            ...currentMonogram
        })
        dispatch(addMonogram({
            id: monogramId,
            ...currentMonogram
        }))
    }

    return (
        <main className="p-3">
            <form onSubmit={generateMonogram} className="w-100">
                <div className="row my-0 row-gap-3">
                    <div className="col-sm-6">
                        <label htmlFor="first_letter" className="form-label mb-1">First Letter</label>
                        <input ref={firstLetterRef} type="text" className="form-control" id="first_letter" placeholder="Enter first letter here" />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="second_letter" className="form-label mb-1">Second Letter</label>
                        <input ref={secondLetterRef} type="text" className="form-control" id="second_letter" placeholder="Enter second letter here" />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="text_color" className="form-label mb-1">Text Color</label>
                        <input ref={textColorRef} type="color" className="form-control" id="text_color" />
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="background_color" className="form-label mb-1">Background Color</label>
                        <input ref={backgroundColorRef} type="color" className="form-control" id="background_color" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Generate</button>
            </form>
        </main>
    )
}
