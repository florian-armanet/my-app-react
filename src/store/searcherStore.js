import { createSlice } from '@reduxjs/toolkit'

export const searcherStore = createSlice({
    name: 'searcher',
    initialState: {
        searchValue: '',
    },
    reducers: {
        setSearcher: (state, action) => {
            state.searchValue = action.payload
        },
    },
})

export default searcherStore.reducer

export const { setSearcher } = searcherStore.actions
