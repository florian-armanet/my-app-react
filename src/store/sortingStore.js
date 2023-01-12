import { createSlice } from '@reduxjs/toolkit'

export const sortingStore = createSlice({
    name: 'filters',
    initialState: {
        sortings: [
            { name: 'Price', code: 'price', propertySorted: 'price' },
            { name: 'Rating', code: 'rate', propertySorted: 'rate' },
        ],
        currentSorting: {}
    },
    reducers: {
        setCurrentSorting: (state, { payload: sorting }) => {
            state.currentSorting = sorting
        },
    },
})

export default sortingStore.reducer

export const { setCurrentSorting } = sortingStore.actions
