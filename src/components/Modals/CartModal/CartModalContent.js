import { NavLink } from 'react-router-dom'
import { PATH_CART } from '../../../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import CartModalContentProduct from './CartModalContentProduct'
import CartModalContentTotals from './CartModalContentTotals'
import { setCartModalOpened } from '../../../store/cartStore'

export const CartModalContent = () => {
    const dispatch       = useDispatch()
    const productsInCart = useSelector(state => state.products.inCart)

    /**
     *
     */
    const closeModal = () => {
        dispatch(setCartModalOpened(false))
    }

    return (
        <div className="flex-1 bg-gray-50">
            <div className="flex flex-col h-full justify-between">
                <ul className="px-4 py-6 max-h-600px overflow-auto Scrollbar Scrollbar--light">
                    { productsInCart.map((product, index) =>
                        <CartModalContentProduct product={ product } key={ index }/>) }
                </ul>

                <div className="px-4 py-6 bg-primary-base/10">
                    <CartModalContentTotals/>

                    <NavLink to={ `${ PATH_CART }` } onClick={ closeModal } className="Button Button--primary block">
                        Mon panier
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default CartModalContent
