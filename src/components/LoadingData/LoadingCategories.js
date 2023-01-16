import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import fetchCategories from '../../api/categories'
import fetchProducts from '../../api/products'

const LoadingCategories = () => {
    const dispatch                = useDispatch()
    const categoriesStatusRequest = useSelector(state => state.categories.status)
    const productsStatusRequest   = useSelector(state => state.products.status)

    useEffect(() => {
        if (!categoriesStatusRequest) {
            dispatch(fetchCategories())
        }

        if (!productsStatusRequest) {
            dispatch(fetchProducts())
        }
    }, [categoriesStatusRequest, productsStatusRequest, dispatch])
}

export default LoadingCategories
