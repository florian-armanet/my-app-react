import {
    addCategoriesSelected,
    removeCategoriesSelected,
    setCategoriesSelected
} from '../../store/filtersCategoriesStore'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearcher } from '../../store/searcherStore'
import { SORT_ASC, SORT_DESC } from '../../utils/constants'
import { setProductsFiltered } from '../../store/productsStore'

const FiltersCategoriesItem = ({ category }) => {
    const [currentCheckedValue, setCurrentCheckedValue] = useState(false)

    const dispatch              = useDispatch()
    const getCategoriesSelected = useSelector(state => state.filtersCategories.categoriesSelected)
    /**
     *
     * @param event
     */
    const handleChange          = (event) => {
        dispatch(setSearcher(''))
        setCurrentCheckedValue(!currentCheckedValue)

        if (event.target.checked && !getCategoriesSelected.includes(category.categoryCode)) {
            dispatch(addCategoriesSelected(category.categoryCode))
            return
        }

        if (!event.target.checked && getCategoriesSelected.includes(category.categoryCode)) {
            dispatch(removeCategoriesSelected(category.categoryCode))
        }
    }

    useEffect(() => {
        if (getCategoriesSelected.length) return

        setCurrentCheckedValue(false)
    }, [getCategoriesSelected])

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
