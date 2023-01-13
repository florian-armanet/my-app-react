import {
    addCategoriesSelected,
    removeCategoriesSelected,
    setCategoriesSelected,
    setResetCheckedValuesOfFilters
} from '../../store/filtersCategoriesStore'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setInputValue, setSearcher } from '../../store/searcherStore'

const FiltersCategoriesItem = ({ category }) => {
    const [currentCheckedValue, setCurrentCheckedValue] = useState(false)

    const dispatch                    = useDispatch()
    const resetCheckedValuesOfFilters = useSelector(state => state.filtersCategories.resetCheckedValuesOfFilters)
    const getCategoriesSelected       = useSelector(state => state.filtersCategories.categoriesSelected)
    const resetAllCheckedValues       = useSelector(state => state.filters.resetAllCheckedValues)

    /**
     *
     * @param event
     */
    const handleChange = (event) => {
        dispatch(setInputValue(''))
        dispatch(setSearcher(''))
        dispatch(setResetCheckedValuesOfFilters(false))
        setCurrentCheckedValue(!currentCheckedValue)

        if (event.target.checked && !getCategoriesSelected.includes(category.categoryCode)) {
            dispatch(addCategoriesSelected(category.categoryCode))
        }

        if (!event.target.checked && getCategoriesSelected.includes(category.categoryCode)) {
            dispatch(removeCategoriesSelected(category.categoryCode))
        }
    }

    useEffect(() => {
        if (resetCheckedValuesOfFilters || resetAllCheckedValues) {
            setCurrentCheckedValue(false)
            dispatch(setCategoriesSelected([]))
        }
    }, [resetCheckedValuesOfFilters, resetAllCheckedValues, dispatch])

    return (
        <li className="flex flex-wrap items-center mb-1">
            <input type="checkbox"
                   checked={ currentCheckedValue }
                   onChange={ handleChange }
                   id={ category.categoryCode }
                   className="cursor-pointer appearance-none mr-2 w-5 h-5 border border-primary-base rounded checked:bg-primary-base"/>
            <label htmlFor={ category.categoryCode }
                   className="cursor-pointer">{ category.categoryLabel }</label>
        </li>
    )
}

export default FiltersCategoriesItem
