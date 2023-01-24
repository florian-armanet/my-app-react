import { useDispatch, useSelector } from 'react-redux'
import { setCartModalOpened } from '../../../store/cartStore'
import { CSSTransition } from 'react-transition-group'
import CartModalContent from './CartModalContent'
import CartModalContentEmpty from './CartModalContentEmpty'

export const CartModal = () => {
    const dispatch       = useDispatch()
    const modalOpened    = useSelector(state => state.cart.modalOpened)
    const productsInCart = useSelector(state => state.products.inCart)

    /**
     *
     */
    const closeModal = () => {
        dispatch(setCartModalOpened(false))
    }

    const renderCartModalContent = () => {
        if (productsInCart.length) {
            return <CartModalContent/>
        }

        return <CartModalContentEmpty/>
    }

    return (
        <>
            <CSSTransition in={ modalOpened } classNames="Animation-translateX" timeout={ 300 } unmountOnExit appear>
                <div
                    className="z-max fixed top-0 right-0 bottom-0 max-w-450 w-full flex flex-col bg-white shadow flex flex-col overflow-auto">
                    <div className="relative p-4 bg-primary-base/10 text-primary-base">
                        <i onClick={ closeModal }
                           className="Icon-close-light absolute left-4 text-xl absolute-y-center cursor-pointer"></i>
                        <p className="text-xl text-center">Mon panier</p>
                    </div>

                    { renderCartModalContent() }
                </div>
            </CSSTransition>

            <CSSTransition in={ modalOpened } classNames="Animation-opacity" timeout={ 300 } unmountOnExit appear>
                <div onClick={ closeModal } className="z-popup fixed inset-0 bg-black/30"></div>
            </CSSTransition>
        </>
    )
}

export default CartModal
