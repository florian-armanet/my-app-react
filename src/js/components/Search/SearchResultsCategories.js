import { useSelector } from 'react-redux'
import SearchResultsCategory from './SearchResultsCategory'

const SearchResultsCategories = () => {
    const categoriesOfSearch = useSelector(state => state.categories.categoriesOfSearch)

    return (
        <div className="o-col-12 lg:o-col-3 flex flex-col items-start text-primary-500 lg-down:mb-4">
            <p className="mb-2 pb-1 font-bold border-b">Suggestions</p>

            <ul className="flex flex-col divide-y divide-gray-100">
                { categoriesOfSearch.map((category, index) =>
                    <SearchResultsCategory key={index} category={ category }/>) }
            </ul>
        </div>
    )
}

export default SearchResultsCategories
