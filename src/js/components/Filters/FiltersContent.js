import FiltersCategories from './FiltersCategories'
import { setFiltersOpened, setResetAllCheckedValues } from '../../store/filtersStore'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Searcher from './Searcher'

const FiltersContent = () => {
    const dispatch              = useDispatch()
    const resetAllCheckedValues = useSelector(state => state.filters.resetAllCheckedValues)
    const products              = useSelector(state => state.products.all)

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

    if (!products.length) {
        return (
            <>
                <div className="Loader-block max-x-xs w-full h-72 mb-8"></div>
                <div className="Loader-block max-x-xs w-full h-72"></div>
            </>
        )
    }

    return (
        <>
            <div className="bg-white border border-primary-light/50 rounded mb-8">
                <FiltersCategories/>
            </div>

            <div className="mb-8">
                <Searcher/>
            </div>

            <div className="flex flex-wrap justify-between px-4 py-4">
                <button className="underline" onClick={ resetAllFilters }>
                    Tout réinitialiser
                </button>
                <button onClick={ closeFilters }
                        className="lg:hidden bg-primary-base hover:bg-primary-hover transition text-white px-3 py-2 rounded">
                    Appliquer
                </button>
            </div>
        </>

    )
}
export default FiltersContent
