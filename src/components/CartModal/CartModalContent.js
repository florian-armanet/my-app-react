import { NavLink } from 'react-router-dom'
import { PATH_CART } from '../../utils/constants'
import { useSelector } from 'react-redux'
import CartModalContentProduct from './CartModalContentProduct'

export const CartModalContent = () => {
    const productsInCart = useSelector(state => state.products.inCart)

    return (
        <div className="flex-1">
            <div className="flex flex-col h-full justify-between px-4 py-6">
                <ul>
                    { productsInCart.map((product, index) => <CartModalContentProduct
                        product={ product } key={ index }/>) }
                </ul>

                <NavLink to={ `${ PATH_CART }` } className="Button Button--primary">
                    Mon panier
                </NavLink>
            </div>
        </div>
    )
}

export default CartModalContent
