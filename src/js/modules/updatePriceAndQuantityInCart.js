import { setQuantityInCart, setTotalPrice } from '../store/productsStore'

export default (dispatch, productsInCartUpdated = []) => {
    const quantity = [...productsInCartUpdated].reduce((acc, curr) => {
        return acc + curr.quantity
    }, 0)

    dispatch(setQuantityInCart(quantity))

    const newTotalPrice = [...productsInCartUpdated].reduce((acc, curr) => {
        return acc + curr.price * curr.quantity
    }, 0)

    dispatch(setTotalPrice(newTotalPrice))
}