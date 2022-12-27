import { createSlice } from '@reduxjs/toolkit'

export const cartStore = createSlice({
    name: 'cart',
    initialState: {
        productsIdQty: [],
        modalOpened: false,
    },
    reducers: {
        addProductIds: (state, { payload }) => {
            state.productsIdQty.push(payload)
        },
        removeProductId: (state, { payload: { productId, quantity } }) => {
            const indexOfProductIdRemoved = [...state.productsIdQty].indexOf([...state.productsIdQty].find(p => p.id === productId))
            state.productsIdQty.splice(indexOfProductIdRemoved, 1)
        },
        setCartModalOpened: (state, { payload: bool }) => {
            state.modalOpened = bool
        }
    },
})

export const { addProductIds, removeProductId, setCartModalOpened } = cartStore.actions

export default cartStore.reducer
