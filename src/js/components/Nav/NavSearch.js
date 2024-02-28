import { useDispatch, useSelector } from 'react-redux'
import { setSearchModalOpened } from '../../store/searchStore'

const NavSearch = () => {
    const dispatch   = useDispatch()
    const products   = useSelector(state => state.products.products)
    const categories = useSelector(state => state.categories.categories)

    const handleOpenSearchModal = () => {
        dispatch(setSearchModalOpened(true))
        document.body.classList.add('remove-scrollbar')
    }

    if (!products.length || !categories.length) {
        return (
            <div className="Loader-block w-6 h-6 rounded-full mr-4"></div>
        )
    }

    return (
        <i onClick={ handleOpenSearchModal } className="Icon-search text-xl mr-4 cursor-pointer"></i>
    )
}

export default NavSearch
