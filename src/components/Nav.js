import { NavLink, Outlet } from 'react-router-dom'

const Nav = () => {
    const classesHandler = ({ isActive }) =>
        isActive
        ? 'font-bold mx-4 has-underline text-xl has-underline--invert'
        : 'font-bold mx-4 has-underline text-xl'

    return (
        <div className="o-container">
            <nav className="flex-flow-center py-12">
                <NavLink to="/" className={ classesHandler }>Home</NavLink>
                <NavLink to="/products" className={ classesHandler }>Produits</NavLink>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Nav
