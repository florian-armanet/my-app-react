import FiltersCategories from './FiltersCategories'
import { setFiltersOpened, setResetAllCheckedValues } from '../../store/filtersStore'
import { useDispatch, useSelector } from 'react-redux'
import Sortings from './Sortings'
import { useEffect } from 'react'

const FiltersContent = () => {
    const dispatch              = useDispatch()
    const resetAllCheckedValues = useSelector(state => state.filters.resetAllCheckedValues)

    /**
     *
     * @param event
     * @returns {*}
     */
    const resetAllFilters = (event) => {
        dispatch(setResetAllCheckedValues(true))
    }

    /**
     *
     */
    const closeFilters = () => {
        dispatch(setFiltersOpened(false))
    }

    useEffect(() => {
        if (resetAllCheckedValues) {
            dispatch(setResetAllCheckedValues(false))
        }
    }, [resetAllCheckedValues, dispatch])

    return (
        <>
            <div className="bg-white border border-primary-light/50 rounded mb-8">
                <FiltersCategories/>
            </div>

            <Sortings/>

            <div className="flex flex-wrap justify-between px-4 py-4">
                <button className="underline" onClick={ resetAllFilters }>
                    Tout réinitialiser
                </button>
                <button onClick={ closeFilters }
                        className="bg-primary-base hover:bg-primary-hover transition text-white px-3 py-2 rounded">
                    Appliquer
                </button>
            </div>
        </>

    )
}
export default FiltersContent
