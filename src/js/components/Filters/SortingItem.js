import { SORT_ASC, SORT_DESC } from '../../utils/constants'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProductsFiltered } from '../../store/productsStore'
import { setCurrentSorting, setSortingModalOpened } from '../../store/sortingStore'
import { setInputValue, setSearcher } from '../../store/searcherStore'

const SortingItem = ({ item }) => {
    const dispatch                = useDispatch()
    const productsFiltered        = useSelector(state => state.products.filtered)
    const currentSorting          = useSelector(state => state.sorting.currentSorting)
    const resetAllCheckedValues   = useSelector(state => state.filters.resetAllCheckedValues)
    const [isActive, setIsActive] = useState()

    /**
     *
     * @param event
     */
    const handleChange = (event) => {
        dispatch(setInputValue(''))
        dispatch(setSearcher(''))

        dispatch(setCurrentSorting({
            ...item
        }))

        if (item.typeSorting === SORT_DESC) {
            dispatch(setProductsFiltered(
                [...productsFiltered]
                    .sort((a, b) => b[item.propertySorted] - a[item.propertySorted])
            ))
        }

        if (item.typeSorting === SORT_ASC) {
            dispatch(setProductsFiltered(
                [...productsFiltered]
                    .sort((a, b) => a[item.propertySorted] - b[item.propertySorted])
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
        setIsActive(currentSorting.typeSorting === item.typeSorting && currentSorting.code === item.code)
    }, [currentSorting])

    return (
        <li onClick={ handleChange }
            className={ `flex-flow-centerY cursor-pointer py-1 px-4 border-b border-gray-100 hover:bg-gray-50 transition-fast ${ isActive ? 'bg-gray-100' : '' }` }>
            { item.name }
        </li>
    )
}

export default SortingItem
