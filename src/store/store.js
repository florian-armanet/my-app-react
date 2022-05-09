import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsStore'
import categoriesReducer from './categoriesStore'
import availableProductsReducer from './availableProductsStore'
import searcherReducer from './searcherStore'
import filtersCategoriesReducer from './filtersCategoriesStore'
import filtersReducer from './filtersStore'

export default configureStore({
    reducer: {
        products: productsReducer,
        categories: categoriesReducer,
        availableProducts: availableProductsReducer,
        searcher: searcherReducer,
        filters: filtersReducer,
        filtersCategories: filtersCategoriesReducer,
    }
})
