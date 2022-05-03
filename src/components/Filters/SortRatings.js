import { useDispatch, useSelector } from 'react-redux'
import { setProductsFiltered } from '../../store/productsStore'
import { setResetCheckedValues } from '../../store/ratingsStore'
import SortRatingsItem from './SortRatingsItem'
import { useEffect } from 'react'

const SortRatings = () => {
    const dispatch              = useDispatch()
    const productsFiltered      = useSelector(state => state.products.filtered)
    const getResetCheckedValues = useSelector(state => state.ratings.resetCheckedValues)

    const inputRatings = {
        'sortDesc': 'Sort desc',
        'sortAsc': 'Sort asc',
    }

    useEffect(() => {
        if (getResetCheckedValues) {
            dispatch(setProductsFiltered(
                [...productsFiltered]
                    .sort((a, b) => a.id - b.id)
            ))
        }
    }, [getResetCheckedValues])

    const clickResetCheckedValue = () => dispatch(setResetCheckedValues(true))

    return (
        <li>
            <p className="px-4 py-2 bg-tertiary-light/30">Rating</p>
            <ul className="flex flex-col items-start px-4 pt-4 mb-4">
                { Object.entries(inputRatings).map(([typeSorting, label]) => {
                    return <SortRatingsItem typeSorting={ typeSorting } label={ label } key={ typeSorting }/>
                }) }
            </ul>
            <button className="px-4 py-2 mb-8 underline hover:text-secondary-base transition"
                    onClick={ clickResetCheckedValue }>
                Reset sort by rating
            </button>
        </li>
    )
}

export default SortRatings
