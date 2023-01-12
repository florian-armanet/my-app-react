import { SORT_ASC, SORT_DESC } from '../../utils/constants'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProductsFiltered } from '../../store/productsStore'
import { setResetAllCheckedValues } from '../../store/filtersStore'
import { setCurrentSorting } from '../../store/sortingStore'

const SortingItem = ({ currentSorting, typeSorting, label }) => {
    const dispatch              = useDispatch()
    const productsFiltered      = useSelector(state => state.products.filtered)
    const inputNode             = React.createRef()
    const resetAllCheckedValues = useSelector(state => state.filters.resetAllCheckedValues)

    const handleChange = (event) => {
        dispatch(setResetAllCheckedValues(false))
        dispatch(setCurrentSorting({
            typeSorting,
            ...currentSorting
        }))

        if (typeSorting === SORT_DESC) {
            dispatch(setProductsFiltered(
                [...productsFiltered]
                    .sort((a, b) => b[currentSorting.propertySorted] - a[currentSorting.propertySorted])
            ))
        }

        if (typeSorting === SORT_ASC) {
            dispatch(setProductsFiltered(
                [...productsFiltered]
                    .sort((a, b) => a[currentSorting.propertySorted] - b[currentSorting.propertySorted])
            ))
        }
    }

    useEffect(() => {
        if (resetAllCheckedValues) {
            inputNode.current.checked = false
            dispatch(setResetAllCheckedValues(false))
        }
    }, [resetAllCheckedValues])

    return (
        <li className="flex-flow-centerY mb-1">
            <input type="radio"
                   name="sorting"
                   id={ currentSorting.code + '_' + typeSorting }
                   className="appearance-none w-4 h-4 rounded-full border-2 border-primary-base transition checked:bg-primary-base"
                   ref={ inputNode }
                   onChange={ handleChange }/>
            <label htmlFor={ currentSorting.code + '_' + typeSorting }
                   className="cursor-pointer ml-2">{ currentSorting.name + ' ' + label }</label>
        </li>
    )
}

export default SortingItem
