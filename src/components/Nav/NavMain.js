import { NavLink } from 'react-router-dom'
import { PATH_CATEGORIES, PATH_PRODUCTS } from '../../utils/constants'
import { isTablet } from '../../utils/viewport'
import { useDispatch } from 'react-redux'
import { setMenuOpened } from '../../store/menuStore'

const NavMain = () => {
    const dispatch = useDispatch()

    const onClick = () => {
        dispatch(setMenuOpened(true))
    }

    /**
     *
     * @param isActive
     * @returns {string}
     */
    const classesHandler = ({ isActive }) =>
        isActive
            ? 'font-bold mx-4 has-underline text-xl has-underline--white has-underline--invert'
            : 'font-bold mx-4 has-underline has-underline--white text-xl'

    if (isTablet()) {
        return (
            <i onClick={ onClick } className="Icon-menu text-xl mr-4"></i>
        )
    }

    return (
        <nav className="flex-flow-center">
            <NavLink to={ PATH_PRODUCTS } className={ classesHandler }>Produits</NavLink>
            <NavLink to={ PATH_CATEGORIES } className={ classesHandler }>Catégories</NavLink>
        </nav>
    )
}

export default NavMain
