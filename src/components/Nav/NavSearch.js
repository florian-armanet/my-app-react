import { useDispatch, useSelector } from 'react-redux'
import { setSearchModalOpened } from '../../store/searchStore'
import EventBusVanilla from '../../utils/eventBusVanilla'
import { EVENT_OPEN_SEARCH_MODAL } from '../../utils/constants'

const NavSearch = () => {
    const dispatch   = useDispatch()
    const products   = useSelector(state => state.products.all)
    const categories = useSelector(state => state.categories.all)

    const onOpenSearchModal = () => {
        dispatch(setSearchModalOpened(true))
        EventBusVanilla.dispatchEvent(EVENT_OPEN_SEARCH_MODAL)
    }

    if (!products.length || !categories.length) {
        return (
            <div className="Loader-block w-6 h-6 rounded-full mr-4"></div>
        )
    }

    return (
        <i onClick={ onOpenSearchModal } className="Icon-search text-xl mr-4 cursor-pointer"></i>
    )
}

export default NavSearch
