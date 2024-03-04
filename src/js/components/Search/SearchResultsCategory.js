import { useSelector, useDispatch } from 'react-redux'
import { PATH_CATEGORIES } from '../../utils/constants'
import { useNavigate } from 'react-router-dom'
import { setSearchModalOpened } from '../../store/searchStore'

const SearchResultsCategory = ({ category }) => {
    const searchValue = useSelector(state => state.search.searchValue)
    const regex = new RegExp('(' + searchValue.toLowerCase().split(' ').join('|') + ')+', 'g')
    const categoryLabelSplit = category.categoryLabel.toLowerCase().split(regex).filter(part => part)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    /**
     * 
     * @param {*} category 
     */
    const handleCLick = (category = {}) => {
        dispatch(setSearchModalOpened(false))
        navigate(`${PATH_CATEGORIES + '/' + category.categoryLabelOrigin}`)
    }

    return (
        <li onClick={() => handleCLick(category)}
            className="transition-fast hover:bg-primary-hover hover:text-white hover:px-2 py-2 block text-lg leading-none text-gray-800 cursor-pointer">
            {categoryLabelSplit.map((part, index) => {
                return <span key={index}
                    className={searchValue.toLowerCase().includes(part) ? 'font-bold' : ''}>{part}</span>
            })}
        </li>
    )
}

export default SearchResultsCategory
