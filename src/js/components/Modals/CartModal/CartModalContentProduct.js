import { useDispatch } from 'react-redux'
import formatNumberToString from '../../../utils/formatNumberToString'
import { removeProductInCart, setProductQuantity } from '../../../store/productsStore'
import Quantity from '../../Quantity'

export const CartModalContentProduct = ({ product }) => {
    const dispatch = useDispatch()

    /**
     *
     */
    const onRemoveProduct = () => {
        dispatch(removeProductInCart(product.id))
    }

    return (
        <li className="mb-2 p-4 bg-gray-50/50 rounded flex flex-wrap items-center">
            <div className="w-12 mr-4">
                <img src={ product.image }
                     alt={ product.title }
                     className="max-h-12"/>
            </div>
            <div className="flex-1 flex flex-col">
                <div className="flex-flow-between items-center mb-2">
                    <p className="line-clamp-1 flex-1 mr-4">{ product.title }</p>
                    <i onClick={ onRemoveProduct } className="Icon-trash text-red-500 cursor-pointer"></i>
                </div>
                <div className="flex-flow-between items-center">
                    <Quantity product={ product }/>

                    <p>{ formatNumberToString(product.price) } €</p>
                </div>
            </div>
        </li>
    )
}

export default CartModalContentProduct
