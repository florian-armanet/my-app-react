import { useDispatch, useSelector } from 'react-redux'
import { setSearcher } from '../store/searcherStore'
import debounce from '../utils/debounce'

const Searcher = () => {
    const dispatch    = useDispatch()
    const getSearcher = useSelector(state => state.searcher.searchValue)

    const handleChange = debounce((event) => {
        dispatch(setSearcher(event.target.value))
    }, 1000)

    return (
        <div>
            <input type="text"
                   placeholder="Rechercher un produit..."
                   className="text-primary-hover font-bold focus:outline outline-primary-base mb-4 py-2 px-8"
                   onChange={ handleChange }/>
        </div>
    )
}

export default Searcher
