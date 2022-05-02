import { useDispatch, useSelector } from 'react-redux'
import { setSearcher } from '../store/searcherStore'
import debounce from '../utils/debounce'
import { setProductsBySearcher } from '../store/productsStore'
import { useEffect } from 'react'

const Searcher = () => {
    const dispatch    = useDispatch()
    const getSearcher = useSelector(state => state.searcher.searchValue)

    const handleChange = debounce((event) => {
        dispatch(setSearcher(event.target.value))
    }, 1000)

    useEffect(() => {
        dispatch(setProductsBySearcher(getSearcher))
    }, [getSearcher, dispatch])

    return (
        <div className="flex-flow-centerY bg-white box-shadow-inset-3 py-2 px-8">
            <input type="text"
                   placeholder="Rechercher un produit..."
                   className="text-primary-hover font-bold placeholder:text-primary-base outline-none"
                   onChange={ handleChange }/>
            <i className="Icon-search text-lg"></i>
        </div>
    )
}

export default Searcher
