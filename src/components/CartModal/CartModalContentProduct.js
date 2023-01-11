import { useDispatch } from 'react-redux'
import formatNumberToString from '../../utils/formatNumberToString'
import { removeProductInCart, setProductQuantity } from '../../store/productsStore'

export const CartModalContentProduct = ({ product }) => {
    const dispatch = useDispatch()

    /**
     *
     */
    const onRemoveProduct = () => {
        dispatch(removeProductInCart(product.id))
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

        dispatch(setProductQuantity({...payload}))
    }

    /**
     *
     */
    const decrementQuantity = () => {
        if (product.quantity <= 1) return

        const payload = {
            id: product.id,
            quantity: product.quantity - 1
        }

        dispatch(setProductQuantity({...payload}))
    }

    /**
     *
     */
    const incrementQuantity = () => {
        const payload = {
            id: product.id,
            quantity: product.quantity + 1
        }

        dispatch(setProductQuantity({...payload}))
    }

    return (
        <li className="mb-2 p-4 bg-white rounded flex flex-wrap items-center">
            <div className="w-12 mr-4">
                <img src={ product.image }
                     alt={ product.title }
                     className="h-12"/>
            </div>
            <div className="flex-1 flex flex-col">
                <div className="flex-flow-between items-center mb-2">
                    <p className="line-clamp-1 flex-1 mr-4">{ product.title }</p>
                    <i onClick={ onRemoveProduct } className="Icon-trash text-red-500 cursor-pointer"></i>
                </div>
                <div className="flex-flow-between items-center">
                    <div className="flex-flow-centerY bg-primary-base/25 text-primary-base mr-4 rounded-lg">
                        <span onClick={ decrementQuantity }
                              className="w-8 flex-flow-center cursor-pointer text-2xl transition-fast">-</span>
                        <input type="number"
                               value={ product.quantity }
                               onChange={ handleChange }
                               min="1"
                               className="js-input-number bg-transparent text-center font-bold text-lg w-10 h-8 focus:outline-0"/>
                        <span onClick={ incrementQuantity }
                              className="w-8 flex-flow-center cursor-pointer text-2xl transition-fast">+</span>
                    </div>

                    <p>{ formatNumberToString(product.price) } €</p>
                </div>
            </div>
        </li>
    )
}

export default CartModalContentProduct
