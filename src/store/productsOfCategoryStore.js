import { createSlice } from '@reduxjs/toolkit'
import fetchProductsOfCategory from '../api/productsOfCategory'
import { STATUS_FAILED, STATUS_LOADING, STATUS_SUCCEEDED } from '../utils/constants'
import uppercaseFirstLetter from '../utils/uppercaseFirstLetter'

export const productsOfCategoryStore = createSlice({
    name: 'productsOfCategory',
    initialState: {
        categoriesFetched: [],
        status: '',
        error: null,
    },
    reducers: {

    },
    extraReducers (builder) {
        builder
            .addCase(fetchProductsOfCategory.pending, (state, { payload }) => {
                state.status = STATUS_LOADING
            })
            .addCase(fetchProductsOfCategory.fulfilled, (state, { payload }) => {
                state.status = STATUS_SUCCEEDED
                const clone = [...state.categoriesFetched];
                clone.push(...[...payload].reduce((acc, currObj) => {
                    acc.push({
                        ...currObj,
                        category: {
                            categoryLabelOrigin: currObj.category,
                            categoryLabel: uppercaseFirstLetter(currObj.category),
                            categoryCode: currObj.category.replace(' ', '_').replace('\'', '')
                        },
                        rate: currObj.rating.rate,
                    })

                    return acc
                }, []))
                state.categoriesFetched = clone
            })
            .addCase(fetchProductsOfCategory.rejected, (state, { error }) => {
                state.status = STATUS_FAILED
                state.error  = error.message
            })
    }
})

export default productsOfCategoryStore.reducer
