import { CSSTransition } from 'react-transition-group'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { PATH_CATEGORIES, PATH_PRODUCTS } from '../../utils/constants'
import { setMenuOpened } from '../../store/menuStore'

const MenuModal = () => {
    const dispatch   = useDispatch()
    const menuOpened = useSelector(state => state.menu.menuOpened)

    /**
     *
     */
    const closeMenu = () => {
        dispatch(setMenuOpened(false))
    }

    return (
        <>
            <CSSTransition in={ menuOpened } classNames="Animation-translateX" timeout={ 300 } unmountOnExit appear>
                <div
                    className="z-max fixed top-0 right-0 bottom-0 p-4 max-w-450 w-full bg-white shadow text-primary-base">
                    <div className="relative p-4 h-full text-primary-base">
                        <i onClick={ closeMenu }
                           className="Icon-close-light absolute top-4 right-4 text-xl absolute-y-center cursor-pointer"></i>

                        <nav className="flex flex-col justify-center items-center h-full">
                            <NavLink to={ PATH_PRODUCTS }
                                     onClick={ closeMenu }
                                     className="p-2 rounded text-white bg-primary-base mb-4">Produits</NavLink>
                            <NavLink to={ PATH_CATEGORIES }
                                     onClick={ closeMenu }
                                     className="p-2 rounded text-white bg-primary-base">Catégories</NavLink>
                        </nav>
                    </div>
                </div>
            </CSSTransition>
        </>
    )
}

export default MenuModal
