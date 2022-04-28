import { useDispatch } from 'react-redux'
import { setSearcher } from '../store/searcherStore'
import debounce from '../utils/debounce'

const Searcher = () => {
    const dispatch    = useDispatch()

    const handleChange = debounce((event) => {
        dispatch(setSearcher(event.target.value))
    }, 1000)

    return (
        <>
            <input type="text"
                   placeholder="Rechercher un produit..."
                   className="text-primary-hover font-bold placeholder:text-primary-base outline-none box-shadow-inset-3 py-2 px-8"
                   onChange={ handleChange }/>
        </>
    )
}

export default Searcher
