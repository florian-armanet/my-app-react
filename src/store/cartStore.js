import { createSlice } from '@reduxjs/toolkit'

export const cartStore = createSlice({
    name: 'cart',
    initialState: {
        productIds: [],
        modalOpened: false,
    },
    reducers: {
        addProductIds: (state, { payload: idProduct }) => {
            state.productIds = [...state.productIds].push(idProduct)
        },
        removeProductId: (state, { payload: productId }) => {
            const indexOfProductIdRemoved = [...state.productIds].indexOf([...state.productIds].find(pId => pId === productId))
            state.productIds.splice(indexOfProductIdRemoved, 1)
        },
        setCartModalOpened: (state, { payload }) => {
            state.modalOpened = payload
        }
    },
})

export const { addProductIds, removeProductId, setCartModalOpened } = cartStore.actions

export default cartStore.reducer
