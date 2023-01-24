import { useDispatch, useSelector } from 'react-redux'
import { setProductsFiltered } from '../../store/productsStore'
import SortingItem from './SortingItem'
import { useEffect } from 'react'
import { INPUT_RATINGS } from '../../utils/constants'

const Sorting = ({ sortingCode }) => {
    const dispatch              = useDispatch()
    const productsFiltered      = useSelector(state => state.products.filtered)
    const resetAllCheckedValues = useSelector(state => state.filters.resetAllCheckedValues)
    const sortings              = useSelector(state => state.sorting.sortings)
    const currentSorting        = sortings.find(sorting => sorting.code === sortingCode)

    useEffect(() => {
        if (resetAllCheckedValues) {
            dispatch(setProductsFiltered(
                [...productsFiltered]
                    .sort((a, b) => a.id - b.id)
            ))
        }
    }, [resetAllCheckedValues, dispatch])

    return (
        <>
            <ul className="flex flex-col">
                { Object.entries(INPUT_RATINGS)
                    .map(([typeSorting, label], index) => {
                        return <SortingItem currentSorting={ { typeSorting , ...currentSorting, name: currentSorting.name + ' ' + label } }
                                            key={ index }/>
                    })
                }
            </ul>
        </>
    )
}

export default Sorting
