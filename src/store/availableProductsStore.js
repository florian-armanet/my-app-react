import { createSlice } from '@reduxjs/toolkit'
import fetchProduct from '../api/product'
import { STATUS_FAILED, STATUS_LOADING, STATUS_SUCCEEDED } from '../utils/constants'

export const availableProductsStore = createSlice({
    name: 'availableProducts',
    initialState: {
        productFetched: [],
        status: '',
        error: null,
    },
    reducers: {

    },
    extraReducers (builder) {
        builder
            .addCase(fetchProduct.pending, (state, { payload }) => {
                state.status = STATUS_LOADING
            })
            .addCase(fetchProduct.fulfilled, (state, { payload }) => {
                state.status = STATUS_SUCCEEDED
                const clone = [...state.productFetched];
                clone.push(payload)
                state.productFetched = clone
            })
            .addCase(fetchProduct.rejected, (state, { error }) => {
                state.status = STATUS_FAILED
                state.error  = error.message
            })
    }
})

export const { setStatus } = availableProductsStore.actions

export default availableProductsStore.reducer
