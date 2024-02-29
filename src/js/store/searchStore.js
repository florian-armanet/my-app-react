import { createSlice } from '@reduxjs/toolkit'

export const searchStore = createSlice({
    name: 'cart',
    initialState: {
        searchValue: '',
        searchInputValue: '',
        modalOpened: false,
    },
    reducers: {
        setSearchValue: (state, { payload: bool }) => {
            state.searchValue = bool
        },
        setSearchInputValue: (state, { payload }) => {
            state.searchInputValue = payload
        },
        setSearchModalOpened: (state, { payload: bool }) => {
            state.modalOpened = bool

            if (state.modalOpened) {
                document.body.classList.add('remove-scrollbar')
                return
            }
        
            document.body.classList.remove('remove-scrollbar')
        },
    },
})

export const { setSearchValue, setSearchInputValue, setSearchModalOpened } = searchStore.actions

export default searchStore.reducer
