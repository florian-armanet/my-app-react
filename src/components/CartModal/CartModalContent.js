import { NavLink } from 'react-router-dom'
import { PATH_CART } from '../../utils/constants'
import { useSelector } from 'react-redux'
import CartModalContentProduct from './CartModalContentProduct'
import CartModalContentTotals from './CartModalContentTotals'

export const CartModalContent = () => {
    const productsInCart = useSelector(state => state.products.inCart)

    return (
        <div className="flex-1">
            <div className="flex flex-col h-full justify-between">
                <ul className="px-4 py-6 max-h-600px overflow-auto Scrollbar Scrollbar--light">
                    { productsInCart.map((product, index) =>
                        <CartModalContentProduct product={ product } key={ index }/>) }
                </ul>

                <div className="px-4 py-6 bg-primary-base/10">
                    <CartModalContentTotals/>

                    <NavLink to={ `${ PATH_CART }` } className="Button Button--primary block">
                        Mon panier
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default CartModalContent
