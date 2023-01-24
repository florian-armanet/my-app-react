import { createSlice } from '@reduxjs/toolkit'

export const cartStore = createSlice({
    name: 'cart',
    initialState: {
        modalOpened: false,
    },
    reducers: {
        setCartModalOpened: (state, { payload: bool }) => {
            state.modalOpened = bool
        },
    },
})

export const { setCartModalOpened } = cartStore.actions

export default cartStore.reducer
