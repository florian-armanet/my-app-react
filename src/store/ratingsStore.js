import { createSlice } from '@reduxjs/toolkit'

export const ratingsStore = createSlice({
    name: 'ratings',
    initialState: {
        resetCheckedValues: false
    },
    reducers: {
        setResetCheckedValues: (state, { payload }) => {
            state.resetCheckedValues = payload
        }
    },
})

export default ratingsStore.reducer

export const { setResetCheckedValues } = ratingsStore.actions
