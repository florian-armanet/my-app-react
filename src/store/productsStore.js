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
        setProductsFiltered: (state, action) => {
            state.filtered = action.payload
        },
        setProductsBySearcher: (state, action) => {
            state.filtered = [...state.all].filter(product => {
                return matchStrings(product.title, action.payload) || action.payload === ''
            })
        },
        setProductsByCategories: (state, action) => {
            state.filtered = [...state.all].filter(product => {
                return action.payload.includes(product.category.categoryCode) || !action.payload.length
            })
        },
    },
    extraReducers (builder) {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUS_LOADING
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = STATUS_SUCCEEDED
                state.all  = action.payload.reduce((acc, currObj) => {
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

export const { setProductsFiltered, setProductsBySearcher, setProductsByCategories } = productsStore.actions

export default productsStore.reducer
