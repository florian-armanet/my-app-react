import FiltersCategoriesItem from './FiltersCategoriesItem'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { setCategories, setResetCheckedValues } from '../../store/filtersStore'

const FiltersCategories = () => {
    const dispatch = useDispatch()
    const productsFiltered   = useSelector(state => state.products.filtered)
    const categories = useSelector(state => state.filters.categories)

    useEffect(() => {
        dispatch(setCategories([...productsFiltered]))
    }, [productsFiltered])

    const clickResetCheckedValue = () => dispatch(setResetCheckedValues(true))

    return (
        <li>
            <p className="px-4 py-2 bg-tertiary-light/30">Categories</p>
            <ul className="px-4 pt-4 mb-4">
                { categories.map((category, index) =>
                    <FiltersCategoriesItem category={ category } key={ index }/>)
                }
            </ul>
            <button className="px-4 py-2 mb-8 underline hover:text-secondary-base transition"
                    onClick={ clickResetCheckedValue }>
                Reset All
            </button>
        </li>
    )
}

export default FiltersCategories
