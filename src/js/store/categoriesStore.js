import { createSlice } from '@reduxjs/toolkit'
import fetchCategories from '../api/categories'
import { STATUS_FAILED, STATUS_LOADING, STATUS_SUCCEEDED } from '../utils/constants'
import uppercaseFirstLetter from '../utils/uppercaseFirstLetter'
import matchStrings from '../utils/matchStrings'

export const categoriesStore = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
        categoriesOfSearch: [],
        categoriesSelected: [],
        status: '',
        error: null,
    },
    reducers: {
        setCategoriesOfSearch: (state, { payload }) => {
            state.categoriesOfSearch = [...state.categories].filter(category => {
                return matchStrings(category.categoryLabel, payload) || payload === ''
            })
        },
        setCategoriesSelected: (state, { payload }) => {
            state.categoriesSelected = payload
        },
        addCategoriesSelected: (state, { payload }) => {
            const categoriesSelectedClone = [...state.categoriesSelected]

            categoriesSelectedClone.push(payload)
            state.categoriesSelected = categoriesSelectedClone
        },
        removeCategoriesSelected: (state, { payload }) => {
            const categoriesSelectedClone = [...state.categoriesSelected]

            categoriesSelectedClone.splice(categoriesSelectedClone.indexOf(payload), 1)
            state.categoriesSelected = categoriesSelectedClone
        },
    },
    extraReducers (builder) {
        builder
            .addCase(fetchCategories.pending, (state, { payload }) => {
                state.status = STATUS_LOADING
            })
            .addCase(fetchCategories.fulfilled, (state, { payload }) => {
                state.status = STATUS_SUCCEEDED
                state.categories    = payload.reduce((acc, category) => {
                    const objCategory = {
                        categoryLabelOrigin: category,
                        categoryLabel: uppercaseFirstLetter(category),
                        categoryCode: category.replace(' ', '_').replace('\'', ''),
                        filterActivated: false,
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

export const {
                 setCategoriesOfSearch,
                 addCategoriesSelected,
                 removeCategoriesSelected,
                 setCategoriesSelected,
             } = categoriesStore.actions

export default categoriesStore.reducer
