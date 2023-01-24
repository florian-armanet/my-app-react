import { createSlice } from '@reduxjs/toolkit'

export const menuStore = createSlice({
    name: 'menu',
    initialState: {
        menuOpened: false,
    },
    reducers: {
        setMenuOpened: (state, { payload: bool }) => {
            state.menuOpened = bool
        },
    },
})

export const { setMenuOpened } = menuStore.actions

export default menuStore.reducer
