import { useDispatch, useSelector } from 'react-redux'
import { setCartModalOpened } from '../../store/cartStore'

export const NavCart = () => {
    const dispatch = useDispatch()
    const productsInCart = useSelector(state => state.products.inCart)

    const openModal = () => {
        dispatch(setCartModalOpened(true))
    }

    return (
        <div className="relative">
            <i onClick={ openModal } className="Icon-basket text-3xl font-bold cursor-pointer"></i>
            <span className="absolute -top-3 lg:-top-1 lg-down:left-3 lg:-right-3 text-xs rounded-full w-4 h-4 flex-flow-center bg-white text-primary-base leading-none">
                { productsInCart.length }
            </span>
        </div>
    )
}

export default NavCart
