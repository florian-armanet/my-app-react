import { useDispatch, useSelector } from 'react-redux'
import { setCartModalOpened } from '../store/cartStore'
import { CSSTransition } from 'react-transition-group'

export const CartModal = () => {
    const dispatch    = useDispatch()
    const modalOpened = useSelector(state => state.cart.modalOpened)
    const closeModal  = () => {
        dispatch(setCartModalOpened(false))
    }

    return (
        <>
            <CSSTransition in={ modalOpened } classNames="Animation-translateX" timeout={ 300 } unmountOnExit appear>
                <div
                    className="z-max fixed top-0 right-0 bottom-0 max-w-450 w-full flex flex-col bg-white shadow text-black flex flex-col">
                    <div className="relative p-4 bg-primary-base/25 text-primary-base">
                        <i onClick={ closeModal }
                           className="Icon-close-light absolute left-4 text-xl absolute-y-center cursor-pointer"></i>
                        <p className="text-xl text-center">Mon panier</p>
                    </div>

                    <div className="flex-1">
                        <div className="flex flex-col h-full justify-center items-center">
                            <i className="Icon-basket text-6xl text-primary-base mb-4"></i>
                            <p className="text-xl text-primary-base">Votre panier est vide</p>
                        </div>
                    </div>
                </div>
            </CSSTransition>

            <CSSTransition in={ modalOpened } classNames="Animation-opacity" timeout={ 300 } unmountOnExit appear>
                <div onClick={closeModal} className="z-popup fixed inset-0 bg-white/75"></div>
            </CSSTransition>
        </>
    )
}

export default CartModal
