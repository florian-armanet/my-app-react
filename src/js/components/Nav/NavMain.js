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
            ? 'mx-4 text-xl py-2 px-4 rounded-full bg-white text-primary-base'
            : 'mx-4 text-xl py-2 px-4 rounded-full hover:bg-primary-lighter hover:text-primary-base transition-fast'

    if (isTablet()) {
        return (
            <i onClick={onClick} className="Icon-menu text-xl mr-5"></i>
        )
    }

    return (
        <nav className="flex-flow-center">
            <NavLink to={PATH_PRODUCTS} className={classesHandler}>
                <div className='flex-flow-center'>
                    <span>Produits</span>
                    <i className='Icon-product text-2xl ml-2'></i>
                </div>
            </NavLink>
            <NavLink to={PATH_CATEGORIES} className={classesHandler}>
                <div className='flex-flow-center'>
                    <span>Catégories</span>
                    <i className='Icon-categories text-2xl ml-2'></i>
                </div>
            </NavLink>
        </nav>
    )
}

export default NavMain
