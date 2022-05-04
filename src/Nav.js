import { NavLink, Outlet } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="o-container">
            <nav className="flex-flow-center py-12">
                <NavLink to="/" className="font-bold mx-4 has-underline text-xl">Home</NavLink>
                <NavLink to="/products" className="font-bold mx-4 has-underline text-xl">Produits</NavLink>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Nav
