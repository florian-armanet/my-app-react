import { NavLink } from 'react-router-dom'
import { PATH_CART } from '../../../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import CartModalContentProduct from './CartModalContentProduct'
import CartModalContentTotals from './CartModalContentTotals'
import { setCartModalOpened } from '../../../store/cartStore'

const CartModalContent = () => {
    const dispatch = useDispatch()
    const productsInCart = useSelector(state => state.products.inCart)

    /**
     *
     */
    const handleCloseModal = () => {
        dispatch(setCartModalOpened(false))
    }

    return (
        <div className="flex-1">
            <div className="flex flex-col h-full justify-between">
                <ul className="px-4 py-6 max-h-600px overflow-auto Scrollbar Scrollbar--light">
                    {productsInCart.map(product =>
                        <li className="mb-2 p-4 bg-gray-50/50 rounded flex flex-wrap items-center" key={product.id}>
                            <CartModalContentProduct product={product} />
                        </li>
                    )}
                </ul>

                <div className="px-4 py-6 bg-primary-base/10">
                    <CartModalContentTotals />

                    <NavLink to={`${PATH_CART}`} onClick={handleCloseModal}
                        className="Button Button--primary block">
                        Mon panier
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default CartModalContent
