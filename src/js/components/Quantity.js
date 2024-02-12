import { setProductQuantity } from '../store/productsStore'
import { useDispatch, useSelector } from 'react-redux'
import { PRODUCTS_IN_CART } from '../utils/constants'
import { useState } from 'react'

const Quantity = ({ product }) => {
    const dispatch = useDispatch()
    const productsInCart = useSelector(state => state.products.inCart)

    const [quantity, setQuantity] = useState(product.quantity || 1)

    /**
     *
     * @param p
     */
    const processLocalStorage = (p = {}) => {
        localStorage.setItem(PRODUCTS_IN_CART, JSON.stringify([
            ...productsInCart.filter(p => p.id !== product.id),
            {
                ...product,
                ...p,
            }
        ]))
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

        setQuantity(Number(event.target.value))
        dispatch(setProductQuantity({ ...payload }))

        processLocalStorage(payload)
    }

    /**
     *
     */
    const handleDecrement = () => {
        if (quantity <= 1) return
        setQuantity(quantity - 1)

        const payload = {
            id: product.id,
            quantity: quantity - 1
        }

        dispatch(setProductQuantity({ ...payload }))

        processLocalStorage(payload)
    }

    /**
     *
     */
    const handleIncrement = () => {
        const payload = {
            id: product.id,
            quantity: quantity + 1
        }

        dispatch(setProductQuantity({ ...payload }))

        setQuantity(quantity + 1)

        processLocalStorage(payload)
    }

    return (
        <div className="flex-flow-centerY bg-primary-base/25 text-primary-base mr-4 rounded-lg overflow-hidden">
            <div onClick={ handleDecrement }
                 className="w-8 flex-flow-center cursor-pointer text-2xl hover:bg-primary-light hover:text-white">-</div>
            <input type="number"
                   value={ quantity }
                   onChange={ handleChange }
                   min="1"
                   className="js-input-number bg-transparent text-center font-bold text-lg w-10 h-8 focus:outline-0"/>
            <div onClick={ handleIncrement }
                 className="w-8 flex-flow-center cursor-pointer text-2xl hover:bg-primary-light hover:text-white">+</div>
        </div>
    )
}

export default Quantity
