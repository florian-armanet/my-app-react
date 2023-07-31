import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsStore'
import categoriesReducer from './categoriesStore'
import productsFetchedReducer from './productsFetchedStore'
import searcherReducer from './searcherStore'
import filtersReducer from './filtersStore'
import productsOfCategoryReducer from './productsOfCategoryStore'
import cartReducer from './cartStore'
import menuReducer from './menuStore'
import sortingReducer from './sortingStore'
import searchReducer from './searchStore'

export default configureStore({
    reducer: {
        products: productsReducer,
        categories: categoriesReducer,
        productsFetched: productsFetchedReducer,
        productsOfCategory: productsOfCategoryReducer,
        searcher: searcherReducer,
        filters: filtersReducer,
        cart: cartReducer,
        menu: menuReducer,
        sorting: sortingReducer,
        search: searchReducer,
    }
})
