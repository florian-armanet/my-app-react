import { NavLink, Outlet } from 'react-router-dom'
import { PATH_CART, PATH_CATEGORIES, PATH_PRODUCTS } from '../utils/constants'
import CartModal from './CartModal'
import NavCart from './Nav/NavCart'

const Nav = () => {
    const classesHandler = ({ isActive }) =>
        isActive
            ? 'font-bold mx-4 has-underline text-xl has-underline--white has-underline--invert'
            : 'font-bold mx-4 has-underline has-underline--white text-xl'

    return (
        <>
            <CartModal/>

            <div className="o-container">
                <div className="o-full bg-primary-base text-white">
                    <div className="o-container">
                        <div className="flex-flow-between items-center py-4 mb-8">
                            <NavLink to="/" className="p-2 border-2 border-white rounded font-bold">
                                My app React
                            </NavLink>

                            <nav className="flex-flow-center">
                                <NavLink to={ PATH_CATEGORIES } className={ classesHandler }>Catégories</NavLink>
                                <NavLink to={ PATH_PRODUCTS } className={ classesHandler }>Produits</NavLink>
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
