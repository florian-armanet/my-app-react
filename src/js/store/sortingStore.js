import { createSlice } from '@reduxjs/toolkit'

export const sortingStore = createSlice({
    name: 'sorting',
    initialState: {
        sortings: [
            { name: 'Prix', code: 'price', propertySorted: 'price' },
            { name: 'Avis', code: 'rate', propertySorted: 'rate' },
        ],
        modalOpened: false,
        currentSorting: {},
    },
    reducers: {
        setCurrentSorting: (state, { payload: sorting }) => {
            state.currentSorting = sorting
        },
        setSortingModalOpened: (state, { payload }) => {
            state.modalOpened = payload
        },
    },
})

export default sortingStore.reducer

export const { setCurrentSorting, setSortingModalOpened } = sortingStore.actions
