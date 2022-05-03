import { createSlice } from '@reduxjs/toolkit'

export const filtersStore = createSlice({
    name: 'filters',
    initialState: {
        resetAllCheckedValues: false
    },
    reducers: {
        setResetAllCheckedValues: (state, { payload }) => {
            state.resetAllCheckedValues = payload
        }
    },
})

export default filtersStore.reducer

export const { setResetAllCheckedValues } = filtersStore.actions
