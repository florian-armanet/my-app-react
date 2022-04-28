import { createSlice } from '@reduxjs/toolkit'

export const filtersStore = createSlice({
    name: 'filters',
    initialState: {
        categories: '',
    },
    reducers: {

    },
})

export default filtersStore.reducer

export const {  } = filtersStore.actions
