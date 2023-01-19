import { useEffect } from 'react'
import fetchProducts from '../../../api/products'
import { SORT_DESC, STATUS_SUCCEEDED } from '../../../utils/constants'
import { setProductsFiltered } from '../../../store/productsStore'
import { useDispatch, useSelector } from 'react-redux'

const LoadingProducts = () => {
    const dispatch              = useDispatch()
    const products              = useSelector(state => state.products.all)
    const productsStatusRequest = useSelector(state => state.products.status)
    const getCategoriesSelected = useSelector(state => state.filtersCategories.categoriesSelected)
    const currentSorting        = useSelector(state => state.sorting.currentSorting)

    useEffect(() => {
        if (!productsStatusRequest) {
            dispatch(fetchProducts())
            return
        }

        if (productsStatusRequest === STATUS_SUCCEEDED) {
            const productsFiltered = [...products]
                .filter(product => {
                    return getCategoriesSelected.includes(product.category.categoryCode) || !getCategoriesSelected.length
                })

            if (!Object.keys(currentSorting).length) {
                dispatch(setProductsFiltered(productsFiltered))

                return
            }

            if (currentSorting.typeSorting === SORT_DESC) {
                dispatch(setProductsFiltered(
                    productsFiltered.sort((a, b) => b[currentSorting.propertySorted] - a[currentSorting.propertySorted])
                ))

                return
            }

            dispatch(setProductsFiltered(
                productsFiltered.sort((a, b) => a[currentSorting.propertySorted] - b[currentSorting.propertySorted])
            ))
        }

    }, [productsStatusRequest, products, getCategoriesSelected, currentSorting, dispatch])
}

export default LoadingProducts
