import { createSlice } from '@reduxjs/toolkit'

export const sortingStore = createSlice({
    name: 'filters',
    initialState: {
        sortings: [
            { name: 'Prix', code: 'price', propertySorted: 'price' },
            { name: 'Avis', code: 'rate', propertySorted: 'rate' },
        ],
        currentSorting: {},
        resetCheckedValuesOfSortings: false,
    },
    reducers: {
        setCurrentSorting: (state, { payload: sorting }) => {
            state.currentSorting = sorting
        },
        setResetCheckedValuesOfSortings: (state, { payload }) => {
            state.resetCheckedValuesOfSortings = payload
        },
    },
})

export default sortingStore.reducer

export const { setCurrentSorting, setResetCheckedValuesOfSortings } = sortingStore.actions
