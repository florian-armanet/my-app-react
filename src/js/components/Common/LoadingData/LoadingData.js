import LoadingProducts from './LoadingProducts'
import LoadingCategories from './LoadingCategories'
import { PRODUCTS_IN_CART } from '../../../utils/constants'
import { setProductInCart } from '../../../store/productsStore'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const LoadingData = () => {
    const dispatch       = useDispatch()
    const productsInCart = useSelector(state => state.products.inCart)

    if (!productsInCart.length) {
        if (localStorage.getItem(PRODUCTS_IN_CART)) {
            const initData = JSON.parse(localStorage.getItem(PRODUCTS_IN_CART))
            dispatch(setProductInCart([...initData]))
        }
    }

    return (
        <>
            <LoadingProducts/>
            <LoadingCategories/>
        </>
    )
}

export default LoadingData
