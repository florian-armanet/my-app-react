import { useSelector } from 'react-redux'
import formatNumberToString from '../../../utils/formatNumberToString'

export const CartModalContent = () => {
    const quantityInCart = useSelector(state => state.products.quantityInCart)
    const totalPrice     = useSelector(state => state.products.totalPrice)

    return (
        <>
            <div className="flex-flow-between mb-2">
                <span>Total de produits</span>
                <span>{ quantityInCart }</span>
            </div>
            <div className="flex-flow-between mb-8 text-xl text-primary-base">
                <span>Total à payer</span>
                <span>{ formatNumberToString(totalPrice) } €</span>
            </div>
        </>
    )
}

export default CartModalContent
