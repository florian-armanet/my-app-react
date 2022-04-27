import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsStore'
import searcherReducer from './searcherStore'

export default configureStore({
    reducer: {
        products: productsReducer,
        searcher: searcherReducer,
    }
})
