import { createSlice } from '@reduxjs/toolkit'

export const filtersStore = createSlice({
    name: 'filters',
    initialState: {
        resetAllCheckedValues: false,
        filtersOpened: false,
    },
    reducers: {
        setFiltersOpened: (state, { payload: bool }) => {
            state.filtersOpened = bool
        },
        setResetAllCheckedValues: (state, { payload }) => {
            state.resetAllCheckedValues = payload
        }
    },
})

export default filtersStore.reducer

export const { setResetAllCheckedValues, setFiltersOpened } = filtersStore.actions
