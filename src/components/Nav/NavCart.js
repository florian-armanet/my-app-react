import { useDispatch } from 'react-redux'
import { setCartModalOpened } from '../../store/cartStore'

export const NavCart = () => {
    const dispatch = useDispatch()

    const openModal = () => {
        dispatch(setCartModalOpened(true))
    }

    return (
        <i onClick={ openModal } className="Icon-basket text-3xl font-bold cursor-pointer"></i>
    )
}

export default NavCart
