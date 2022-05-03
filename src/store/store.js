import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsStore'
import searcherReducer from './searcherStore'
import filtersCategoriesReducer from './filtersCategoriesStore'
import ratingsReducer from './ratingsStore'

export default configureStore({
    reducer: {
        products: productsReducer,
        searcher: searcherReducer,
        filters: filtersCategoriesReducer,
        ratings: ratingsReducer,
    }
})
