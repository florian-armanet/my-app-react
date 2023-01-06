import { useDispatch, useSelector } from 'react-redux'
import { setProductsFiltered } from '../../store/productsStore'
import SortingItem from './SortingItem'
import { useEffect, useState } from 'react'

const Sorting = ({ sortByProperty }) => {
    const dispatch              = useDispatch()
    const productsFiltered      = useSelector(state => state.products.filtered)
    const resetAllCheckedValues = useSelector(state => state.filters.resetAllCheckedValues)

    const [resetCheckedValues, setResetCheckedValues] = useState(false)

    const inputRatings = {
        'sortDesc': 'Sort desc',
        'sortAsc': 'Sort asc',
    }

    useEffect(() => {
        if (resetCheckedValues || resetAllCheckedValues) {
            dispatch(setProductsFiltered(
                [...productsFiltered]
                    .sort((a, b) => a.id - b.id)
            ))
        }
    }, [resetCheckedValues, resetAllCheckedValues, dispatch])

    const clickResetCheckedValue = () => setResetCheckedValues(true)

    return (
        <li>
            <p className="px-4 py-2 bg-primary-lighter text-primary-base">{ sortByProperty.name }</p>
            <ul className="flex flex-col items-start px-4 pt-4 mb-4">
                { Object.entries(inputRatings)
                    .map(([typeSorting, label]) => {
                        return <SortingItem typeSorting={ typeSorting }
                                            label={ label }
                                            key={ typeSorting }
                                            sortByProperty={ sortByProperty }
                                            resetCheckedValues={ resetCheckedValues }
                                            setResetCheckedValues={ setResetCheckedValues }/>
                    })
                }
            </ul>
            <button className="px-4 py-2 mb-8 underline hover:text-secondary-base transition"
                    onClick={ clickResetCheckedValue }>
                Reset sort by { sortByProperty.name.toLowerCase() }
            </button>
        </li>
    )
}

export default Sorting
