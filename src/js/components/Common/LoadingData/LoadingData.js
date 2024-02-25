import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import fetchProducts from '../../../api/products'

const LoadingData = () => {
    const dispatch = useDispatch()

    const productsStatusRequest = useSelector(state => state.products.status)

    useEffect(() => {
        if (!productsStatusRequest) {
            dispatch(fetchProducts())
            return
        }
    }, [productsStatusRequest, dispatch])
}

export default LoadingData
