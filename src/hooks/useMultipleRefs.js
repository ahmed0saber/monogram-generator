import { useRef } from 'react'

const useMultipleRefs = (number) => {
    const refs = []
    for (let i = 0; i < number; i++) {
        refs.push(useRef())
    }

    return refs
}

export default useMultipleRefs
