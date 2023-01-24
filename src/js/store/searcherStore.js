import { createSlice } from '@reduxjs/toolkit'

export const searcherStore = createSlice({
    name: 'searcher',
    initialState: {
        searchValue: '',
        inputValue: '',
    },
    reducers: {
        setSearcher: (state, { payload }) => {
            state.searchValue = payload
        },
        setInputValue: (state, { payload }) => {
            state.inputValue = payload
        },
    },
})

export default searcherStore.reducer

export const { setSearcher, setInputValue } = searcherStore.actions
