import { SORT_ASC, SORT_DESC } from '../../utils/constants'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProductsFiltered } from '../../store/productsStore'
import { setCurrentSorting, setSortingModalOpened } from '../../store/sortingStore'
import { setInputValue, setSearcher } from '../../store/searcherStore'

const SortingItem = ({ currentSorting }) => {
    const dispatch                     = useDispatch()
    const productsFiltered             = useSelector(state => state.products.filtered)
    const currentSortingStore          = useSelector(state => state.sorting.currentSorting)
    const resetAllCheckedValues        = useSelector(state => state.filters.resetAllCheckedValues)
    const [isActive, setIsActive] = useState()

    /**
     *
     * @param event
     */
    const handleChange = (event) => {
        dispatch(setInputValue(''))
        dispatch(setSearcher(''))

        dispatch(setCurrentSorting({
            ...currentSorting
        }))

        if (currentSorting.typeSorting === SORT_DESC) {
            dispatch(setProductsFiltered(
                [...productsFiltered]
                    .sort((a, b) => b[currentSorting.propertySorted] - a[currentSorting.propertySorted])
            ))
        }

        if (currentSorting.typeSorting === SORT_ASC) {
            dispatch(setProductsFiltered(
                [...productsFiltered]
                    .sort((a, b) => a[currentSorting.propertySorted] - b[currentSorting.propertySorted])
            ))
        }

        dispatch(setSortingModalOpened(false))
    }

    useEffect(() => {
        if (resetAllCheckedValues) {
            dispatch(setCurrentSorting({}))
        }
    }, [resetAllCheckedValues, dispatch])

    useEffect(() => {
        console.log(currentSortingStore);
        setIsActive(currentSortingStore.typeSorting === currentSorting.typeSorting && currentSortingStore.code === currentSorting.code)
    }, [currentSortingStore])

    return (
        <li onClick={ handleChange }
            className={`flex-flow-centerY cursor-pointer py-1 px-4 border-b border-gray-100 hover:bg-gray-50 transition-fast ${isActive ? 'bg-gray-100' : ''}`}>
            { currentSorting.name }
        </li>
    )
}

export default SortingItem
