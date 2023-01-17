import { SORT_ASC, SORT_DESC } from '../../utils/constants'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProductsFiltered } from '../../store/productsStore'
import { setCurrentSorting, setResetCheckedValuesOfSortings } from '../../store/sortingStore'
import { setInputValue, setSearcher } from '../../store/searcherStore'

const SortingItem = ({ currentSorting, typeSorting, label }) => {
    const dispatch                                      = useDispatch()
    const productsFiltered                              = useSelector(state => state.products.filtered)
    const resetCheckedValuesOfSortings                  = useSelector(state => state.sorting.resetCheckedValuesOfSortings)
    const resetAllCheckedValues                         = useSelector(state => state.filters.resetAllCheckedValues)
    const inputNode                                     = useRef()

    /**
     *
     * @param event
     */
    const handleChange = (event) => {
        dispatch(setInputValue(''))
        dispatch(setSearcher(''))

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
        if (resetCheckedValuesOfSortings || resetAllCheckedValues) {
            inputNode.current.checked = false
            dispatch(setCurrentSorting({}))
            dispatch(setResetCheckedValuesOfSortings(false))
        }
    }, [resetCheckedValuesOfSortings, resetAllCheckedValues, dispatch])

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
