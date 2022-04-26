import { createSlice } from '@reduxjs/toolkit'
import fetchProducts from '../api/products'
import { STATUS_FAILED, STATUS_LOADING, STATUS_SUCCEEDED } from '../utils/constants'

export const productsStore = createSlice({
    name: 'products',
    initialState: {
        value: [],
        status: '',
        error: null,
    },
    reducers: {
        setProducts: (state, action) => state.value = action.payload,
    },
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUS_LOADING
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = STATUS_SUCCEEDED
                state.value = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUS_FAILED
                state.error = action.error.message
            })
    }
})

export default productsStore.reducer
