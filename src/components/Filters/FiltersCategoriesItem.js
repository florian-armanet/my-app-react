import {
    setResetCheckedValues,
    addCategoriesSelected,
    removeCategoriesSelected,
    setCategoriesSelected
} from '../../store/filtersCategoriesStore'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setResetAllCheckedValues } from '../../store/filtersStore'

const FiltersCategoriesItem = ({ category }) => {
    const [currentCheckedValue, setCurrentCheckedValue] = useState(false)

    const dispatch              = useDispatch()
    const getResetCheckedValues = useSelector(state => state.filtersCategories.resetCheckedValues)
    const getCategoriesSelected = useSelector(state => state.filtersCategories.categoriesSelected)
    const resetAllCheckedValues = useSelector(state => state.filters.resetAllCheckedValues)

    const handleChange = (event) => {
        dispatch(setResetCheckedValues(false))
        setCurrentCheckedValue(!currentCheckedValue)

        if (event.target.checked && !getCategoriesSelected.includes(category.categoryCode)) {
            dispatch(addCategoriesSelected(category.categoryCode))
        }

        if (!event.target.checked && getCategoriesSelected.includes(category.categoryCode)) {
            dispatch(removeCategoriesSelected(category.categoryCode))
        }
    }

    useEffect(() => {
        if (getResetCheckedValues || resetAllCheckedValues) {
            setCurrentCheckedValue(false)
            dispatch(setCategoriesSelected([]))
            dispatch(setResetAllCheckedValues(false))
        }
    }, [getResetCheckedValues, resetAllCheckedValues, dispatch])

    return (
        <li className="flex flex-wrap items-center mb-1">
            <input type="checkbox"
                   checked={ currentCheckedValue }
                   onChange={ handleChange }
                   id={ category.categoryCode }
                   className="cursor-pointer appearance-none mr-2 w-5 h-5 border border-primary-base rounded checked:bg-primary-base"/>
            <label htmlFor={ category.categoryCode }
                   className="cursor-pointer font-bold">{ category.categoryLabel }</label>
        </li>
    )
}

export default FiltersCategoriesItem
