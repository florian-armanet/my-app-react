import { setProductQuantity } from '../store/productsStore'
import { useDispatch, useSelector } from 'react-redux'
import { PRODUCTS_IN_CART } from '../utils/constants'
import updatePriceAndQuantityInCart from '../modules/updatePriceAndQuantityInCart'

const Quantity = ({ product }) => {
    const dispatch = useDispatch()
    const productsInCart = useSelector(state => state.products.inCart)

    /**
     *
     * @param p
     */
    const updateProductsInCart = (p = {}) => {
        const productsInCartUpdated = [...productsInCart.filter(p => p.id !== product.id), { ...product, ...p }]

        localStorage.setItem(PRODUCTS_IN_CART, JSON.stringify(productsInCartUpdated))

        return productsInCartUpdated
    }

    /**
     *
     * @param event
     */
    const handleChange = (event) => {
        const payload = {
            id: product.id,
            quantity: Number(event.target.value)
        }

        dispatch(setProductQuantity({ ...payload }))

        const productsInCartUpdated = updateProductsInCart(payload)
        updatePriceAndQuantityInCart(dispatch, productsInCartUpdated)
    }

    /**
     *
     */
    const handleDecrement = () => {
        if (product.quantity <= 1) return

        const payload = {
            id: product.id,
            quantity: product.quantity - 1
        }

        dispatch(setProductQuantity({ ...payload }))

        const productsInCartUpdated = updateProductsInCart(payload)
        updatePriceAndQuantityInCart(dispatch, productsInCartUpdated)
    }

    /**
     *
     */
    const handleIncrement = () => {
        const payload = {
            id: product.id,
            quantity: product.quantity + 1
        }

        dispatch(setProductQuantity({ ...payload }))

        const productsInCartUpdated = updateProductsInCart(payload)
        updatePriceAndQuantityInCart(dispatch, productsInCartUpdated)
    }

    return (
        <div className="flex-flow-centerY bg-primary-base/25 text-primary-base rounded-lg overflow-hidden">
            <div onClick={handleDecrement}
                className="w-8 flex-flow-center cursor-pointer text-2xl hover:bg-primary-light hover:text-white">-</div>
            <input type="number"
                value={product.quantity}
                onChange={handleChange}
                min="1"
                className="js-input-number bg-transparent text-center font-bold text-lg w-10 h-8 focus:outline-0" />
            <div onClick={handleIncrement}
                className="w-8 flex-flow-center cursor-pointer text-2xl hover:bg-primary-light hover:text-white">+</div>
        </div>
    )
}

export default Quantity
