import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const UseEffectCartModal = () => {
    const modalOpened    = useSelector(state => state.cart.modalOpened)

    useEffect(() => {
        if (modalOpened) {
            document.body.classList.add('remove-scrollbar')
            return
        }

        document.body.classList.remove('remove-scrollbar')
    }, [modalOpened])
}

export default UseEffectCartModal
