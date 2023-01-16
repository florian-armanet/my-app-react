import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsStore'
import categoriesReducer from './categoriesStore'
import productsFetchedReducer from './productsFetchedStore'
import searcherReducer from './searcherStore'
import filtersCategoriesReducer from './filtersCategoriesStore'
import filtersReducer from './filtersStore'
import productsOfCategoryReducer from './productsOfCategoryStore'
import cartReducer from './cartStore'
import menuReducer from './menuStore'
import sortingReducer from './sortingStore'

export default configureStore({
    reducer: {
        products: productsReducer,
        categories: categoriesReducer,
        productsFetched: productsFetchedReducer,
        productsOfCategory: productsOfCategoryReducer,
        searcher: searcherReducer,
        filters: filtersReducer,
        filtersCategories: filtersCategoriesReducer,
        cart: cartReducer,
        menu: menuReducer,
        sorting: sortingReducer,
    }
})
