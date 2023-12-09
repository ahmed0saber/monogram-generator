import { createSlice } from '@reduxjs/toolkit'
import { getMonogramsFromLocalStorage } from '../utils/localStorage'

export const monogramsSlice = createSlice({
    name: "monograms",
    initialState: {
        monograms: getMonogramsFromLocalStorage()
    },
    reducers: {
        addMonogram: (state, action) => {
            state.monograms.push(action.payload)
        },
        removeMonogram: (state, action) => {
            state.monograms = state.monograms.filter(monogram => monogram.id !== action.payload.id)
        },
    }
})

export const { addMonogram, removeMonogram } = monogramsSlice.actions

export default monogramsSlice.reducer