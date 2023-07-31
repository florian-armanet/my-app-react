import { addCategoriesSelected, removeCategoriesSelected } from '../../store/categoriesStore'
import { useDispatch, useSelector } from 'react-redux'
import { setSearcher } from '../../store/searcherStore'

const FiltersCategoriesItem = ({ category }) => {
    const dispatch              = useDispatch()
    const getCategoriesSelected = useSelector(state => state.categories.categoriesSelected)
    /**
     *
     * @param event
     */
    const handleChange          = (event) => {
        dispatch(setSearcher(''))

        if (event.target.checked && !getCategoriesSelected.includes(category.categoryCode)) {
            dispatch(addCategoriesSelected(category.categoryCode))
            return
        }

        if (!event.target.checked && getCategoriesSelected.includes(category.categoryCode)) {
            dispatch(removeCategoriesSelected(category.categoryCode))
        }
    }

    return (
        <li className="flex flex-wrap items-center mb-1">
            <input type="checkbox"
                   checked={ getCategoriesSelected.includes(category.categoryCode) }
                   onChange={ handleChange }
                   id={ category.categoryCode }
                   className="cursor-pointer appearance-none mr-2 w-5 h-5 border border-primary-base rounded checked:bg-primary-base"/>
            <label htmlFor={ category.categoryCode }
                   className="cursor-pointer">{ category.categoryLabel }</label>
        </li>
    )
}

export default FiltersCategoriesItem
