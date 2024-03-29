import { createSlice } from '@reduxjs/toolkit'
import fetchProducts from '../api/products'
import { STATUS_FAILED, STATUS_LOADING, STATUS_SUCCEEDED, PRODUCTS_IN_CART } from '../utils/constants'
import matchStrings from '../utils/matchStrings'
import uppercaseFirstLetter from '../utils/uppercaseFirstLetter'

export const productsStore = createSlice({
    name: 'products',
    initialState: {
        products: [],
        productsOfSearch: [],
        filtered: [],
        inCart: [],
        quantityInCart: 0,
        totalPrice: 0,
        status: '',
        contentLoading: '',
        error: null,
    },
    reducers: {
        setProductsFiltered: (state, { payload }) => {
            state.filtered = payload
        },
        setProductsOfSearch: (state, { payload }) => {
            state.productsOfSearch = [...state.products].filter(product => {
                return matchStrings(product.title, payload) || payload === ''
            })
        },
        setProductsBySearcher: (state, { payload }) => {
            state.filtered = [...state.products].filter(product => {
                return matchStrings(product.title, payload) || payload === ''
            })
        },
        setProductsByCategories: (state, { payload }) => {
            state.filtered = [...state.products].filter(product => {
                return payload.includes(product.category.categoryCode) || !payload.length
            })
        },
        setProductInCart: (state, { payload }) => {
            state.inCart = payload
        },
        addProductInCart: (state, { payload }) => {
            state.inCart.push(payload)
        },
        removeProductInCart: (state, { payload: id }) => {
            const indexOfProductIdRemoved = [...state.inCart].indexOf([...state.inCart].find(p => p.id === id))
            state.inCart.splice(indexOfProductIdRemoved, 1)
        },
        setProductQuantity: (state, { payload: { id, quantity } }) => {
            state.inCart.find(product => product.id === id).quantity = quantity
        },
        setQuantityInCart: (state, { payload: quantity }) => {
            state.quantityInCart = quantity
        },
        setTotalPrice: (state, { payload: price }) => {
            state.totalPrice = price
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state, { payload }) => {
                state.status = STATUS_LOADING
            })
            .addCase(fetchProducts.fulfilled, (state, { payload }) => {
                state.status = STATUS_SUCCEEDED
                const dataTransformed = payload.reduce((acc, currObj) => {
                    acc.push({
                        ...currObj,
                        category: {
                            categoryLabel: uppercaseFirstLetter(currObj.category),
                            categoryCode: currObj.category.replace(' ', '_').replace('\'', '')
                        },
                        rate: currObj.rating.rate,
                    })

                    return acc
                }, [])
                state.products = dataTransformed
                state.filtered = dataTransformed

                if (localStorage.getItem(PRODUCTS_IN_CART)) {
                    const initData = JSON.parse(localStorage.getItem(PRODUCTS_IN_CART))
                    state.inCart = [...initData]

                    state.quantityInCart = [...state.inCart].reduce((acc, curr) => {
                        return acc + curr.quantity
                    }, 0)


                    state.totalPrice = [...state.inCart].reduce((acc, curr) => {
                        return acc + curr.price * curr.quantity
                    }, 0)
                }
            })
            .addCase(fetchProducts.rejected, (state, { error }) => {
                state.status = STATUS_FAILED
                state.error = error.message
            })
    }
})

export const {
    setProductsFiltered,
    setProductsOfSearch,
    setProductsBySearcher,
    setProductsByCategories,
    setProductInCart,
    addProductInCart,
    removeProductInCart,
    setProductQuantity,
    setQuantityInCart,
    setTotalPrice,
} = productsStore.actions

export default productsStore.reducer
