import { useSelector } from 'react-redux'
import SearchResultsProducts from './SearchResultsProducts'
import SearchResultsHighlighted from './SearchResultsHighlighted'
import SearchResultsCategories from './SearchResultsCategories'

const SearchResults = () => {
    const searchValue = useSelector(state => state.search.searchValue)

    if (!searchValue) {
        return (
            <SearchResultsHighlighted/>
        )
    }

    return (
        <div className="o-grid text-black bg-white mt-4 lg:mt-10 px-4 lg:px-8 pb-4 lg:pb-8">
            <SearchResultsCategories/>

            <SearchResultsProducts/>
        </div>
    )
}

export default SearchResults
