import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { PATH_CATEGORIES } from '../../utils/constants'

const SearchResultsCategory = ({ category }) => {
    const searchValue        = useSelector(state => state.search.searchValue)
    const regex              = new RegExp('(' + searchValue.toLowerCase().split(' ').join('|') + ')+', 'g')
    const categoryLabelSplit = category.categoryLabel.toLowerCase().split(regex).filter(part => part)

    return (
        <li>
            <NavLink to={ `${ PATH_CATEGORIES + '/' + category.categoryLabelOrigin }` }
                     className="transition-fast hover:bg-primary-hover hover:text-white hover:px-2 py-2 block text-lg leading-none text-gray-800">
                { categoryLabelSplit.map((part, index) => {
                    return <span key={ index }
                                 className={ searchValue.toLowerCase().includes(part) ? 'font-bold' : '' }>{ part }</span>
                }) }
            </NavLink>
        </li>
    )
}

export default SearchResultsCategory
