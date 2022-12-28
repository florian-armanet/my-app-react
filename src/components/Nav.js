import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { PATH_CATEGORIES, PATH_PRODUCTS } from '../utils/constants'
import CartModal from './CartModal'
import NavCart from './Nav/NavCart'

const Nav = () => {
    const location = useLocation()

    const isHomepage = location.pathname === '/'

    const classesHandler = ({ isActive }) =>
        isActive
            ? 'font-bold mx-4 has-underline text-xl has-underline--primary has-underline--invert'
            : 'font-bold mx-4 has-underline has-underline--primary text-xl'

    return (
        <>
            <CartModal/>

            <div className="o-container flex flex-col h-full flex-1">
                <div className={ (isHomepage ? '' : 'mb-8 ') + 'o-full bg-primary-light/30 text-primary-base' }>
                    <div className="o-container">
                        <div className="flex-flow-between items-center py-4">
                            <NavLink to="/" className="p-2 border-2 border-primary-base rounded font-bold">
                                My app React
                            </NavLink>

                            <nav className="flex-flow-center">
                                <NavLink to={ PATH_PRODUCTS } className={ classesHandler }>Produits</NavLink>
                                <NavLink to={ PATH_CATEGORIES } className={ classesHandler }>Catégories</NavLink>
                            </nav>

                            <NavCart/>
                        </div>
                    </div>
                </div>

                <Outlet/>
            </div>
        </>
    )
}

export default Nav
