import { PRODUCTS_IN_CART } from '../../../utils/constants'
import { setProductInCart } from '../../../store/productsStore'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import fetchProducts from '../../../api/products'
import { STATUS_SUCCEEDED } from '../../../utils/constants'

const LoadingData = () => {
    const dispatch = useDispatch()

    const productsInCart = useSelector(state => state.products.inCart)
    const productsStatusRequest = useSelector(state => state.products.status)
    const searcherValue = useSelector(state => state.searcher.searchValue)

    useEffect(() => {
        if (!productsStatusRequest) {
            dispatch(fetchProducts())
            return
        }

        if (productsStatusRequest === STATUS_SUCCEEDED && !searcherValue) {
            if (!productsInCart.length) {
                if (localStorage.getItem(PRODUCTS_IN_CART)) {
                    const initData = JSON.parse(localStorage.getItem(PRODUCTS_IN_CART))
                    dispatch(setProductInCart([...initData]))
                }
            }
            console.log('Data of products loaded')
        }

    }, [productsStatusRequest, dispatch])
}

export default LoadingData
