import { CSSTransition } from 'react-transition-group'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { PATH_CATEGORIES, PATH_PRODUCTS } from '../../../utils/constants'
import { setMenuOpened } from '../../../store/menuStore'

const MenuModal = () => {
    const dispatch = useDispatch()
    const menuOpened = useSelector(state => state.menu.menuOpened)

    const classesHandler = ({ isActive }) =>
        isActive
            ? 'p-2 rounded text-primary-base bg-white border border-white my-3'
            : 'p-2 rounded text-white bg-primary-base border border-white my-3'

    /**
     *
     */
    const closeMenu = () => {
        dispatch(setMenuOpened(false))
        document.body.classList.remove('remove-scrollbar')
    }

    return (
        <>
            <CSSTransition in={menuOpened} classNames="Animation-translateX" timeout={300} unmountOnExit appear>
                <div
                    className="z-max fixed top-0 right-0 bottom-0 p-4 max-w-450 w-full bg-primary-base shadow text-white overflow-auto">
                    <div className="relative p-4 h-full text-primary-base">
                        <i onClick={closeMenu}
                            className="Icon-close-light absolute top-4 right-4 text-xl text-white absolute-y-center cursor-pointer"></i>

                        <nav className="flex flex-col justify-center items-center h-full">
                            <NavLink to={PATH_PRODUCTS}
                                onClick={closeMenu}
                                className={classesHandler}>
                                <div className='flex-flow-center'>
                                    <span>Produits</span>
                                    <i className='Icon-product text-xl ml-2'></i>
                                </div>
                            </NavLink>

                            <NavLink to={PATH_CATEGORIES}
                                onClick={closeMenu}
                                className={classesHandler}>
                                <div className='flex-flow-center'>
                                    <span>Catégories</span>
                                    <i className='Icon-categories text-xl ml-2'></i>
                                </div>
                            </NavLink>
                        </nav>
                    </div>
                </div>
            </CSSTransition>
        </>
    )
}

export default MenuModal
