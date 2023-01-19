import Sorting from './Sorting'
import { setCurrentSorting, setResetCheckedValuesOfSortings } from '../../store/sortingStore'
import { useDispatch } from 'react-redux'

const Sortings = () => {
    const dispatch = useDispatch()

    /**
     *
     */
    const onResetSorting = () => {
        dispatch(setCurrentSorting({}))
        dispatch(setResetCheckedValuesOfSortings(true))
    }

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
