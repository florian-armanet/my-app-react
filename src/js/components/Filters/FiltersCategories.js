import FiltersCategoriesItem from './FiltersCategoriesItem'
import { useDispatch, useSelector } from 'react-redux'
import { setCategoriesSelected } from '../../store/categoriesStore'
import { setProductsFiltered } from '../../store/productsStore'

const FiltersCategories = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products)
    const categories = useSelector(state => state.categories.categories)
    const categoriesSelected = useSelector(state => state.categories.categoriesSelected)

    /**
     * 
     */
    const handleResetFilterCategories = () => {
        if (!categoriesSelected.length) return

        dispatch(setCategoriesSelected([]))
        dispatch(setProductsFiltered([...products]))
    }

    return (
        <>
            <p className="px-4 py-2 bg-primary-lighter text-primary-light font-bold">Categories</p>
            <ul className="px-4 pt-4 mb-4">
                {categories.map((category, index) =>
                    <FiltersCategoriesItem category={category} key={index} />)
                }
            </ul>
            {
                !!categoriesSelected.length &&
                <button className="px-4 py-2 mb-4 underline hover:text-secondary-base transition"
                    onClick={handleResetFilterCategories}>
                    Réinitialiser
                </button>
            }
        </>
    )
}

export default FiltersCategories
