import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsStore'
import categoriesReducer from './categoriesStore'
import availableProductsReducer from './availableProductsStore'
import searcherReducer from './searcherStore'
import filtersCategoriesReducer from './filtersCategoriesStore'
import filtersReducer from './filtersStore'
import productsOfCategoryReducer from './productsOfCategoryStore'

export default configureStore({
    reducer: {
        products: productsReducer,
        categories: categoriesReducer,
        availableProducts: availableProductsReducer,
        productsOfCategory: productsOfCategoryReducer,
        searcher: searcherReducer,
        filters: filtersReducer,
        filtersCategories: filtersCategoriesReducer,
    }
})
