import { createSlice } from '@reduxjs/toolkit'

export const menuStore = createSlice({
    name: 'menu',
    initialState: {
        menuOpened: false,
    },
    reducers: {
        setMenuOpened: (state, { payload: bool }) => {
            state.menuOpened = bool

            if (state.menuOpened) {
                document.body.classList.add('remove-scrollbar')
                return
            }
        
            document.body.classList.remove('remove-scrollbar')
        },
    },
})

export const { setMenuOpened } = menuStore.actions

export default menuStore.reducer
