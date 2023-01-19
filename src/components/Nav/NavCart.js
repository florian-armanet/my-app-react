import { useDispatch, useSelector } from 'react-redux'
import { setCartModalOpened } from '../../store/cartStore'
import { useEffect } from 'react'
import { setQuantityInCart, setTotalPrice } from '../../store/productsStore'

export const NavCart = () => {
    const dispatch       = useDispatch()
    const quantityInCart = useSelector(state => state.products.quantityInCart)
    const productsInCart = useSelector(state => state.products.inCart)

    /**
     *
     */
    const openModal = () => {
        dispatch(setCartModalOpened(true))
    }

    useEffect(() => {
        const quantity = [...productsInCart].reduce((acc, curr) => {
            return acc + curr.quantity
        }, 0)

        dispatch(setQuantityInCart(quantity))

        const newTotalPrice = [...productsInCart].reduce((acc, curr) => {
            return acc + curr.price * curr.quantity
        }, 0)

        dispatch(setTotalPrice(newTotalPrice))
    }, [productsInCart, dispatch])

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
