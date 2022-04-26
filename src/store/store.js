import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsStore'

export default configureStore({
    reducer: {
        products: productsReducer
    }
})
