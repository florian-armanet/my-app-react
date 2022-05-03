import { createSlice } from '@reduxjs/toolkit'
import fetchProducts from '../api/products'
import { STATUS_FAILED, STATUS_LOADING, STATUS_SUCCEEDED } from '../utils/constants'
import matchStrings from '../utils/matchStrings'
import uppercaseFirstLetter from '../utils/uppercaseFirstLetter'

export const productsStore = createSlice({
    name: 'products',
    initialState: {
        all: [],
        filtered: [],
        status: '',
        error: null,
    },
    reducers: {
        setProductsFiltered: (state, { payload }) => {
            state.filtered = payload
        },
        setProductsBySearcher: (state, { payload }) => {
            state.filtered = [...state.all].filter(product => {
                return matchStrings(product.title, payload) || payload === ''
            })
        },
        setProductsByCategories: (state, { payload }) => {
            state.filtered = [...state.all].filter(product => {
                return payload.includes(product.category.categoryCode) || !payload.length
            })
        },
    },
    extraReducers (builder) {
        builder
            .addCase(fetchProducts.pending, (state, { payload }) => {
                state.status = STATUS_LOADING
            })
            .addCase(fetchProducts.fulfilled, (state, { payload }) => {
                state.status = STATUS_SUCCEEDED
                state.all  = payload.reduce((acc, currObj) => {
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
            })
            .addCase(fetchProducts.rejected, (state, { error }) => {
                state.status = STATUS_FAILED
                state.error  = error.message
            })
    }
})

export const { setProductsFiltered, setProductsBySearcher, setProductsByCategories } = productsStore.actions

export default productsStore.reducer
