import { createSlice } from '@reduxjs/toolkit'

export const filtersStore = createSlice({
    name: 'filters',
    initialState: {
        filtersOpened: false,
    },
    reducers: {
        setFiltersOpened: (state, { payload: bool }) => {
            state.filtersOpened = bool

            if (state.filtersOpened) {
                document.body.classList.add('remove-scrollbar')
                return
            }
        
            document.body.classList.remove('remove-scrollbar')
        },
    },
})

export default filtersStore.reducer

export const { setFiltersOpened } = filtersStore.actions
