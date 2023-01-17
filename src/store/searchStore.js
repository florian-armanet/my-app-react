import { createSlice } from '@reduxjs/toolkit'

export const searchStore = createSlice({
    name: 'cart',
    initialState: {
        modalOpened: false,
    },
    reducers: {
        setSearchModalOpened: (state, { payload: bool }) => {
            state.modalOpened = bool
        },
    },
})

export const { setSearchModalOpened } = searchStore.actions

export default searchStore.reducer
