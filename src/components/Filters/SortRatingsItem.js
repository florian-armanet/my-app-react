import { SORT_ASC, SORT_DESC } from '../../utils/constants'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProductsFiltered } from '../../store/productsStore'
import { setResetCheckedValues } from '../../store/ratingsStore'

const SortRatingsItem = ({ typeSorting, label }) => {
    const dispatch              = useDispatch()
    const productsFiltered      = useSelector(state => state.products.filtered)
    const getResetCheckedValues = useSelector(state => state.ratings.resetCheckedValues)
    const inputNode             = React.createRef()

    const handleChange = (event) => {
        dispatch(setResetCheckedValues(false))

        if (typeSorting === SORT_DESC) {
            dispatch(setProductsFiltered(
                [...productsFiltered]
                    .sort((a, b) => b.rating.rate - a.rating.rate)
            ))
        }

        if (typeSorting === SORT_ASC) {
            dispatch(setProductsFiltered(
                [...productsFiltered]
                    .sort((a, b) => a.rating.rate - b.rating.rate)
            ))
        }
    }

    useEffect(() => {
        if (getResetCheckedValues) {
            inputNode.current.checked = false
        }
    }, [getResetCheckedValues])

    return (
        <li className="flex-flow-centerY mb-1">
            <input type="radio"
                   name="sortRating"
                   id={ typeSorting }
                   className="appearance-none w-4 h-4 rounded-full border-2 border-primary-base transition checked:bg-primary-base"
                   ref={ inputNode }
                   onChange={ handleChange }/>
            <label htmlFor={ typeSorting } className="cursor-pointer font-bold ml-2">{ label }</label>
        </li>
    )
}

export default SortRatingsItem
