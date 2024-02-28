import { useDispatch, useSelector } from 'react-redux'
import { setCartModalOpened } from '../../store/cartStore'

export const NavCart = () => {
    const dispatch       = useDispatch()
    const quantityInCart = useSelector(state => state.products.quantityInCart)

    /**
     *
     */
    const openModal = () => {
        dispatch(setCartModalOpened(true))
    }

    return (
        <div onClick={ openModal } className="relative cursor-pointer">
            <i className="Icon-basket text-3xl font-bold"></i>
            <span
                className="absolute -top-3 lg:-top-1 lg-down:left-3 lg:-right-3 text-xs rounded-full w-5 h-5 flex-flow-center bg-white text-primary-base">
                { quantityInCart }
            </span>
        </div>
    )
}

export default NavCart
