import { setResetCheckedValues } from '../../store/filtersStore'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const FiltersCategoriesItem = ({ category }) => {
    const [currentCheckedValue, setCurrentCheckedValue] = useState(false)

    const dispatch           = useDispatch()
    const getResetCheckedValues = useSelector(state => state.filters.resetCheckedValues)

    const handleChange = (event) => {
        dispatch(setResetCheckedValues(false))
        setCurrentCheckedValue(!currentCheckedValue)
    }

    useEffect(() => {
        if (getResetCheckedValues) {
            setCurrentCheckedValue(false)
        }
    }, [getResetCheckedValues])

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