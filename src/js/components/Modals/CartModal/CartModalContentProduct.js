import { useDispatch } from 'react-redux'
import formatNumberToString from '../../../utils/formatNumberToString'
import { removeProductInCart } from '../../../store/productsStore'
import Quantity from '../../Quantity'
import { PATH_PRODUCTS } from '../../../utils/constants'
import { NavLink } from 'react-router-dom'
import { setCartModalOpened } from '../../../store/cartStore'

const CartModalContentProduct = ({ product }) => {
    const dispatch = useDispatch()

    /**
     *
     */
    const onRemoveProduct = () => {
        dispatch(removeProductInCart(product.id))
    }

    /**
     *
     */
    const closeModal = () => {
        dispatch(setCartModalOpened(false))
    }

    return (
        <>
            <div className="w-12 mr-4">
                <img src={ product.image }
                     alt={ product.title }
                     className="max-h-12"/>
            </div>
            <div className="flex-1 flex flex-col">
                <div className="flex-flow-between items-center mb-2">
                    <NavLink to={ `${ PATH_PRODUCTS + '/' + product.id }` }
                             onClick={ closeModal }
                             className="line-clamp-1 flex-1 mr-4 transition-fast hover:text-primary-base">
                        { product.title }
                    </NavLink>
                    <i onClick={ onRemoveProduct } className="Icon-trash text-red-500 cursor-pointer"></i>
                </div>
                <div className="flex-flow-between items-center">
                    <Quantity product={ product }/>

                    <p>{ formatNumberToString(product.price) } €</p>
                </div>
            </div>
        </>
    )
}

export default CartModalContentProduct
