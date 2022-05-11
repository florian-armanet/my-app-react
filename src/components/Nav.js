import { NavLink, Outlet } from 'react-router-dom'

const Nav = () => {
    const classesHandler = ({ isActive }) =>
        isActive
        ? 'font-bold mx-4 has-underline text-xl has-underline--invert'
        : 'font-bold mx-4 has-underline text-xl'

    return (
        <div className="o-container">
            <nav className="flex-flow-center py-12">
                <NavLink to="/" className="Icon-home text-2xl mx-4"></NavLink>
                <NavLink to="/categories" className={ classesHandler }>Nos catégories</NavLink>
                <NavLink to="/products" className={ classesHandler }>Produits</NavLink>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Nav
