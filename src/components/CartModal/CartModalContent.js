import { NavLink } from 'react-router-dom'
import { PATH_CART } from '../../utils/constants'

export const CartModalContent = () => {
    return (
        <NavLink to={ `${ PATH_CART }` } className="Button Button--primary">
            Mon panier
        </NavLink>
    )
}

export default CartModalContent
