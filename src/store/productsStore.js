import { createSlice } from '@reduxjs/toolkit'
import fetchProducts from '../api/products'
import { STATUS_FAILED, STATUS_LOADING, STATUS_SUCCEEDED } from '../utils/constants'
import matchStrings from '../utils/matchStrings'
import uppercaseFirstLetter from '../utils/uppercaseFirstLetter'

export const productsStore = createSlice({
    name: 'products',
    initialState: {
        value: [],
        filtered: [],
        status: '',
        error: null,
    },
    reducers: {
        setProductsBySearcher: (state, action) => {
            state.filtered = [...state.value].filter(product => matchStrings(product.title, action.payload))
        },
        setProductsByCategories: (state, action) => {
            state.filtered = [...state.filtered].filter(product => matchStrings(product.category, action.payload))
        },
    },
    extraReducers (builder) {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUS_LOADING
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = STATUS_SUCCEEDED
                state.value  = action.payload.reduce((acc, currObj) => {
                    acc.push({
                        ...currObj,
                        category: {
                            categoryLabel: uppercaseFirstLetter(currObj.category),
                            categoryCode: currObj.category.replace(' ', '_').replace('\'', '')
                        }
                    })

                    return acc
                }, [])
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUS_FAILED
                state.error  = action.error.message
            })
    }
})

export const { setProductsBySearcher, setProductsByCategories } = productsStore.actions

export default productsStore.reducer
