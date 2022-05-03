import FiltersCategories from './Filters/FiltersCategories'
import SortRatings from './Filters/SortRatings'

const Filters = () => {
    const resetAllFilters = (event) => {

    }

    return (
        <div className="flex flex-col mr-8">
            <p className="text-primary-base font-bold mb-4">Filtres</p>
            <div className="bg-white border border-primary-light/50 rounded w-xs">
                <ul className="border-b border-primary-light/50">
                    <FiltersCategories/>
                    <li>
                        <p className="px-4 py-2 bg-tertiary-light/30">Price</p>
                    </li>
                    <SortRatings/>
                </ul>
                <div className="flex flex-wrap justify-between px-4 py-4">
                    <button className="underline" onClick={ resetAllFilters }>
                        Reset All
                    </button>
                    <button className="bg-primary-base hover:bg-primary-hover transition text-white px-3 py-2 rounded">
                        Apply filters
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Filters
