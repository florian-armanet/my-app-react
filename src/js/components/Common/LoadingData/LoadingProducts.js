import { useEffect } from 'react'
import fetchProducts from '../../../api/products'
import { STATUS_SUCCEEDED } from '../../../utils/constants'
import { setProductsFiltered } from '../../../store/productsStore'
import { useDispatch, useSelector } from 'react-redux'

const LoadingProducts = () => {
    const dispatch              = useDispatch()
    const products              = useSelector(state => state.products.all)
    const productsStatusRequest = useSelector(state => state.products.status)
    const searcherValue         = useSelector(state => state.searcher.searchValue)

    useEffect(() => {
        if (!productsStatusRequest) {
            dispatch(fetchProducts())
            return
        }

        if (productsStatusRequest === STATUS_SUCCEEDED && !searcherValue) {
            dispatch(setProductsFiltered(products))
        }

    }, [productsStatusRequest, dispatch])
}

export default LoadingProducts
