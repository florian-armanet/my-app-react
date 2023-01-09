import FiltersCategories from './FiltersCategories'
import Sorting from './Sorting'
import { setFiltersOpened, setResetAllCheckedValues } from '../../store/filtersStore'
import { useDispatch } from 'react-redux'

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
        <div className="bg-white border border-primary-light/50 rounded">
            <ul className="border-b border-primary-light/50">
                <FiltersCategories/>
                <Sorting sortByProperty={ { name: 'Price', code: 'price', propertySorted: 'price' } }/>
                <Sorting sortByProperty={ { name: 'Rating', code: 'rating', propertySorted: 'rate' } }/>
            </ul>
            <div className="flex flex-wrap justify-between px-4 py-4">
                <button className="underline" onClick={ resetAllFilters }>
                    Reset All
                </button>
                <button onClick={ closeFilters }
                        className="bg-primary-base hover:bg-primary-hover transition text-white px-3 py-2 rounded">
                    Apply filters
                </button>
            </div>
        </div>
    )
}

export default FiltersContent
