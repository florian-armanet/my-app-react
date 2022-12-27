import { NavLink } from 'react-router-dom'
import { PATH_CART } from '../../utils/constants'

export const CartModalContent = () => {
    return (
        <div className="flex-1">
            <div className="flex flex-col h-full justify-end px-4 py-6">
                <NavLink to={ `${ PATH_CART }` } className="Button Button--primary">
                    Mon panier
                </NavLink>
            </div>
        </div>
    )
}

export default CartModalContent
