import { useDispatch, useSelector } from 'react-redux'
import { setCartModalOpened } from '../../store/cartStore'
import { useEffect } from 'react'
import { setQuantityInCart, setTotalPrice } from '../../store/productsStore'

export const NavCart = () => {
    const dispatch       = useDispatch()
    const quantityInCart = useSelector(state => state.products.quantityInCart)
    const productsInCart = useSelector(state => state.products.inCart)
    const modalOpened    = useSelector(state => state.cart.modalOpened)

    /**
     *
     */
    const openModal = () => {
        dispatch(setCartModalOpened(true))
    }

    useEffect(() => {
        if (modalOpened) {
            document.body.classList.add('remove-scrollbar')
            return
        }

        document.body.classList.remove('remove-scrollbar')
    }, [modalOpened])

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
        <div className="relative">
            <i onClick={ openModal } className="Icon-basket text-3xl font-bold cursor-pointer"></i>
            <span
                className="absolute -top-3 lg:-top-1 lg-down:left-3 lg:-right-3 text-xs rounded-full w-5 h-5 flex-flow-center bg-primary-base text-white">
                { quantityInCart }
            </span>
        </div>
    )
}

export default NavCart
