import { createSlice } from '@reduxjs/toolkit'

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
        setResetCheckedValues: (state, action) => {
            state.resetCheckedValues = action.payload
        }
    },
})

export default filtersStore.reducer

export const { setCategories, setResetCheckedValues } = filtersStore.actions
