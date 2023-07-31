import FiltersCategoriesItem from './FiltersCategoriesItem'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setCategoriesSelected } from '../../store/categoriesStore'
import { SORT_ASC, SORT_DESC } from '../../utils/constants'
import { setProductsFiltered } from '../../store/productsStore'

const FiltersCategories = () => {
    const dispatch                    = useDispatch()
    const products                    = useSelector(state => state.products.all)
    const categories                  = useSelector(state => state.categories.categories)
    const getCategoriesSelected       = useSelector(state => state.categories.categoriesSelected)
    const currentSorting              = useSelector(state => state.sorting.currentSorting)

    /**
     *
     */
    const clickResetCheckedValue = () => {
        dispatch(setCategoriesSelected([]))
    }

    useEffect(() => {
        const productsFiltered = [...products].filter(product => {
            return getCategoriesSelected.includes(product.category.categoryCode) || !getCategoriesSelected.length
        })

        if (currentSorting?.typeSorting === SORT_DESC) {
            productsFiltered.sort((a, b) => b[currentSorting.propertySorted] - a[currentSorting.propertySorted])
        }

        if (currentSorting?.typeSorting === SORT_ASC) {
            productsFiltered.sort((a, b) => a[currentSorting.propertySorted] - b[currentSorting.propertySorted])
        }

        dispatch(setProductsFiltered(productsFiltered))
    }, [getCategoriesSelected])

    return (
        <>
            <p className="px-4 py-2 bg-primary-lighter text-primary-light font-bold">Categories</p>
            <ul className="px-4 pt-4 mb-4">
                { categories.map((category, index) =>
                    <FiltersCategoriesItem category={ category } key={ index }/>)
                }
            </ul>
            <button className="px-4 py-2 mb-4 underline hover:text-secondary-base transition"
                    onClick={ clickResetCheckedValue }>
                Réinitialiser
            </button>
        </>
    )
}

export default FiltersCategories
