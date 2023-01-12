import Sorting from './Sorting'
import { setCurrentSorting } from '../../store/sortingStore'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setResetAllCheckedValues } from '../../store/filtersStore'

const Sortings = () => {
    const dispatch       = useDispatch()
    const currentSorting = useSelector(state => state.sorting.currentSorting)

    /**
     *
     */
    const onResetSorting = () => {
        console.log('in')
        dispatch(setCurrentSorting({}))
        dispatch(setResetAllCheckedValues(true))
    }

    useEffect(() => {
        console.log(currentSorting)
    }, [currentSorting])

    return (
        <>
            <p className="font-bold mb-4 text-primary-base">Trier par</p>

            <div className="bg-white border border-primary-light/50 rounded py-4">
                <Sorting sortingCode="price"/>
                <Sorting sortingCode="rate"/>

                <button className="px-4 py-2 mt-4 underline hover:text-secondary-base transition"
                        onClick={ onResetSorting }>
                    Réinitialiser
                </button>
            </div>
        </>
    )
}

export default Sortings
