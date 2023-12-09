import { configureStore } from '@reduxjs/toolkit'
import monogramsReducer from './monogramsSlice'

export default configureStore({
    reducer: {
        monograms: monogramsReducer
    }
})
