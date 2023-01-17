import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import fetchCategories from '../../api/categories'

const LoadingCategories = () => {
    const dispatch                = useDispatch()
    const categoriesStatusRequest = useSelector(state => state.categories.status)

    useEffect(() => {
        if (!categoriesStatusRequest) {
            dispatch(fetchCategories())
        }
    }, [categoriesStatusRequest, dispatch])
}

export default LoadingCategories
