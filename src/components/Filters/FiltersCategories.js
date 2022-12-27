import FiltersCategoriesItem from './FiltersCategoriesItem'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchCategories, setResetCheckedValues } from '../../store/filtersCategoriesStore'

const FiltersCategories = () => {
    const dispatch   = useDispatch()
    const products   = useSelector(state => state.products.all)
    const categories = useSelector(state => state.filtersCategories.categories)

    useEffect(() => {
        dispatch(fetchCategories([...products]))
    }, [products, dispatch])

    const clickResetCheckedValue = () => dispatch(setResetCheckedValues(true))

    return (
        <li>
            <p className="px-4 py-2 bg-primary-light/30 text-primary-base">Categories</p>
            <ul className="px-4 pt-4 mb-4">
                { categories.map((category, index) =>
                    <FiltersCategoriesItem category={ category } key={ index }/>)
                }
            </ul>
            <button className="px-4 py-2 mb-8 underline hover:text-secondary-base transition"
                    onClick={ clickResetCheckedValue }>
                Reset Categories
            </button>
        </li>
    )
}

export default FiltersCategories
