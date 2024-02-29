import { createSlice } from '@reduxjs/toolkit'

export const cartStore = createSlice({
    name: 'cart',
    initialState: {
        modalOpened: false,
    },
    reducers: {
        setCartModalOpened: (state, { payload: bool }) => {
            state.modalOpened = bool

            if (state.modalOpened) {
                document.body.classList.add('remove-scrollbar')
                return
            }
        
            document.body.classList.remove('remove-scrollbar')
        },
    },
})

export const { setCartModalOpened } = cartStore.actions

export default cartStore.reducer
