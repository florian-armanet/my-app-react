import { createSlice } from '@reduxjs/toolkit'

export const filtersStore = createSlice({
    name: 'filters',
    initialState: {
        filtersOpened: false,
    },
    reducers: {
        setFiltersOpened: (state, { payload: bool }) => {
            state.filtersOpened = bool
        },
    },
})

export default filtersStore.reducer

export const { setFiltersOpened } = filtersStore.actions
