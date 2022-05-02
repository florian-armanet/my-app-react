import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsStore'
import searcherReducer from './searcherStore'
import filtersReducer from './filtersCategoriesStore'

export default configureStore({
    reducer: {
        products: productsReducer,
        searcher: searcherReducer,
        filters: filtersReducer,
    }
})
