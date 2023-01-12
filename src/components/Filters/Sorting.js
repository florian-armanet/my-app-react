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

    const inputRatings = {
        'sortDesc': 'décroissant',
        'sortAsc': 'croissant',
    }

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
            {/*<p className="px-4 py-2 bg-primary-lighter text-primary-base">{ currentSorting.name }</p>*/}
            <ul className="flex flex-col items-start px-4">
                { Object.entries(inputRatings)
                    .map(([typeSorting, label]) => {
                        return <SortingItem currentSorting={ currentSorting }
                                            typeSorting={ typeSorting }
                                            label={ label }
                                            key={ typeSorting }/>
                    })
                }
            </ul>
        </>
    )
}

export default Sorting
