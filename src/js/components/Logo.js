import { NavLink } from 'react-router-dom'
import { PATH_HOME } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { setSearchModalOpened } from '../store/searchStore'

const Logo = ({ color = 'white' }) => {
    const dispatch = useDispatch()

    /**
     *
     */
    const closeSearchModal = () => {
        dispatch(setSearchModalOpened(false))
    }

    return (
        <div className="flex flex-col items-center" onClick={ closeSearchModal }>
            <NavLink to={ PATH_HOME } className={ `p-2 border-2 border-${ color } rounded font-bold` }>
                My app React
            </NavLink>
            <span className={ `text-xs mt-1 leading-none ${ color }` }>By Florian Armanet</span>
        </div>
    )
}

export default Logo
