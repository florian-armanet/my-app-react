import { createSlice } from '@reduxjs/toolkit'
import filters from '../components/Filters'

export const filtersStore = createSlice({
    name: 'filters',
    initialState: {
        categories: [],
        categoriesSelected: [],
        resetCheckedValues: false,
    },
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload
                .map(({ category }) => category)
                .filter((category, index, array) =>
                        index === array.findIndex((cat) => (
                            cat.categoryLabel === category.categoryLabel && cat.categoryCode === category.categoryCode
                        ))
                )
        },
        addCategoriesSelected: (state, action) => {
            const categoriesSelectedClone = [...state.categoriesSelected]

            categoriesSelectedClone.push(action.payload)
            state.categoriesSelected = categoriesSelectedClone
        },
        removeCategoriesSelected: (state, action) => {
            const categoriesSelectedClone = [...state.categoriesSelected]

            categoriesSelectedClone.splice(categoriesSelectedClone.indexOf(action.payload), 1)
            state.categoriesSelected = categoriesSelectedClone
        },
        resetCategoriesSelected: (state, action) => {
            const categoriesSelectedClone = []
            state.categoriesSelected = categoriesSelectedClone
        },
        setResetCheckedValues: (state, action) => {
            state.resetCheckedValues = action.payload
        }
    },
})

export default filtersStore.reducer

export const {
                 setCategories,
                 addCategoriesSelected,
                 removeCategoriesSelected,
                 setResetCheckedValues,
                 resetCategoriesSelected
             } = filtersStore.actions
