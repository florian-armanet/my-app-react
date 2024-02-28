import { useDispatch, useSelector } from 'react-redux'
import formatNumberToString from '../../../utils/formatNumberToString'
import { removeProductInCart } from '../../../store/productsStore'
import Quantity from '../../Quantity'
import { PATH_PRODUCTS, PRODUCTS_IN_CART } from '../../../utils/constants'
import { NavLink } from 'react-router-dom'
import { setCartModalOpened } from '../../../store/cartStore'
import updatePriceAndQuantityInCart from '../../../modules/updatePriceAndQuantityInCart'

const CartModalContentProduct = ({ product }) => {
    const dispatch = useDispatch()
    const productsInCart = useSelector(state => state.products.inCart)

    /**
     *
     */
    const handleRemoveProduct = () => {
        dispatch(removeProductInCart(product.id))

        const productsInCartUpdated = [...productsInCart].filter(p => p.id !== product.id)
        localStorage.setItem(PRODUCTS_IN_CART, JSON.stringify(productsInCartUpdated))
        updatePriceAndQuantityInCart(dispatch, productsInCartUpdated)
    }

    /**
     *
     */
    const handleCloseModal = () => {
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
                             onClick={ handleCloseModal }
                             className="line-clamp-1 flex-1 mr-4 transition-fast hover:text-primary-base">
                        { product.title }
                    </NavLink>
                    <i onClick={ handleRemoveProduct } className="Icon-trash text-red-500 cursor-pointer"></i>
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
