import { useDispatch, useSelector } from 'react-redux'
import { setProductsFiltered } from '../../store/productsStore'
import SortingItem from './SortingItem'
import { useEffect, useState } from 'react'

const Sorting = ({ sortingCode }) => {
    const dispatch              = useDispatch()
    const productsFiltered      = useSelector(state => state.products.filtered)
    const resetAllCheckedValues = useSelector(state => state.filters.resetAllCheckedValues)
    const sortings              = useSelector(state => state.sorting.sortings)
    const currentSorting        = sortings.find(sorting => sorting.code === sortingCode)

    const [resetCheckedValues, setResetCheckedValues] = useState(false)

    const inputRatings = {
        'sortDesc': 'Sort desc',
        'sortAsc': 'Sort asc',
    }

    /**
     *
     */
    const clickResetCheckedValue = () => {
        setResetCheckedValues(true)
    }

    useEffect(() => {
        if (resetCheckedValues || resetAllCheckedValues) {
            dispatch(setProductsFiltered(
                [...productsFiltered]
                    .sort((a, b) => a.id - b.id)
            ))
        }
    }, [resetCheckedValues, resetAllCheckedValues, dispatch])

    return (
        <>
            <p className="px-4 py-2 bg-primary-lighter text-primary-base">{ currentSorting.name }</p>
            <ul className="flex flex-col items-start px-4 pt-4 mb-4">
                { Object.entries(inputRatings)
                    .map(([typeSorting, label]) => {
                        return <SortingItem currentSorting={ currentSorting }
                                            typeSorting={ typeSorting }
                                            label={ label }
                                            key={ typeSorting }
                                            resetCheckedValues={ resetCheckedValues }
                                            setResetCheckedValues={ setResetCheckedValues }/>
                    })
                }
            </ul>
            <button className="px-4 py-2 mb-8 underline hover:text-secondary-base transition"
                    onClick={ clickResetCheckedValue }>
                Reset sort by { currentSorting.name.toLowerCase() }
            </button>
        </>
    )
}

export default Sorting
