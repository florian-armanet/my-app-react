import { createSlice } from '@reduxjs/toolkit'
import fetchProduct from '../api/product'
import { STATUS_FAILED, STATUS_LOADING, STATUS_SUCCEEDED } from '../utils/constants'

export const productsFetchedStore = createSlice({
    name: 'productsFetched',
    initialState: {
        productsFetched: [],
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
                const clone = [...state.productsFetched];
                clone.push(payload)
                state.productsFetched = clone
            })
            .addCase(fetchProduct.rejected, (state, { error }) => {
                state.status = STATUS_FAILED
                state.error  = error.message
            })
    }
})

export default productsFetchedStore.reducer
