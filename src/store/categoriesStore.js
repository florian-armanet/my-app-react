import { createSlice } from '@reduxjs/toolkit'
import fetchCategories from '../api/categories'
import { STATUS_FAILED, STATUS_LOADING, STATUS_SUCCEEDED } from '../utils/constants'
import uppercaseFirstLetter from '../utils/uppercaseFirstLetter'

export const categoriesStore = createSlice({
    name: 'categories',
    initialState: {
        all: [],
        status: '',
        error: null,
    },
    reducers: {},
    extraReducers (builder) {
        builder
            .addCase(fetchCategories.pending, (state, { payload }) => {
                state.status = STATUS_LOADING
            })
            .addCase(fetchCategories.fulfilled, (state, { payload }) => {
                state.status = STATUS_SUCCEEDED
                state.all    = payload.reduce((acc, category) => {
                    const objCategory = {
                        categoryLabelOrigin: category,
                        categoryLabel: uppercaseFirstLetter(category),
                        categoryCode: category.replace(' ', '_').replace('\'', '')
                    }
                    acc.push({ ...objCategory })

                    return acc
                }, [])
            })
            .addCase(fetchCategories.rejected, (state, { error }) => {
                state.status = STATUS_FAILED
                state.error  = error.message
            })
    }
})

export default categoriesStore.reducer

// export const { } = categoriesStore.actions
