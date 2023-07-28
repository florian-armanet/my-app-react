import { createSlice } from '@reduxjs/toolkit'

export const filtersCategoriesStore = createSlice({
    name: 'filtersCategories',
    initialState: {
        categories: [],
        categoriesSelected: [],
    },
    reducers: {
        fetchCategories: (state, { payload }) => {
            state.categories = payload.map(({ category }) => category)
                .filter((category, index, array) =>
                        index === array.findIndex((cat) => (
                            cat.categoryLabel === category.categoryLabel && cat.categoryCode === category.categoryCode
                        ))
                )
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
})

export default filtersCategoriesStore.reducer

export const {
                 fetchCategories,
                 addCategoriesSelected,
                 removeCategoriesSelected,
                 setCategoriesSelected
             } = filtersCategoriesStore.actions
