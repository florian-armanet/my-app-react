import FiltersCategories from './FiltersCategories'
import Sorting from './Sorting'
import { setFiltersOpened, setResetAllCheckedValues } from '../../store/filtersStore'
import { useDispatch } from 'react-redux'
import Sortings from './Sortings'

const FiltersContent = () => {
    const dispatch = useDispatch()

    /**
     *
     * @param event
     * @returns {*}
     */
    const resetAllFilters = (event) => dispatch(setResetAllCheckedValues(true))

    /**
     *
     */
    const closeFilters = () => {
        dispatch(setFiltersOpened(false))
    }

    return (
        <>
            <div className="bg-white border border-primary-light/50 rounded mb-8">
                {/*<div className="border-b border-primary-light/50">*/}
                    <FiltersCategories/>
                {/*</div>*/}
            </div>

            <Sortings/>

            <div className="lg:hidden flex flex-wrap justify-between px-4 py-4">
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
