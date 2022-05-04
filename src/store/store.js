import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsStore'
import availableProductsReducer from './availableProductsStore'
import searcherReducer from './searcherStore'
import filtersCategoriesReducer from './filtersCategoriesStore'
import filtersReducer from './filtersStore'

export default configureStore({
    reducer: {
        products: productsReducer,
        availableProducts: availableProductsReducer,
        searcher: searcherReducer,
        filters: filtersReducer,
        filtersCategories: filtersCategoriesReducer,
    }
})
