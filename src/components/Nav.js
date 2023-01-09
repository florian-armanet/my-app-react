import { NavLink, Outlet, useLocation } from 'react-router-dom'
import CartModal from './CartModal'
import NavCart from './Nav/NavCart'
import NavMain from './Nav/NavMain'
import MenuModal from './MenuModal/MenuModal'
import { isTablet } from '../utils/viewport'
import { useEffect, useState } from 'react'

const Nav = () => {
    const location                  = useLocation()
    const [renderNav, setRenderNav] = useState('')

    const isHomepage = location.pathname === '/'

    useEffect(() => {
        if (isTablet()) {
            setRenderNav(
                <div className="flex-flow-centerY">
                    <NavMain/>
                    <NavCart/>
                </div>
            )

            return
        }

        setRenderNav(
            <>
                <NavMain/>
                <NavCart/>
            </>
        )
    }, [])

    return (
        <>
            <CartModal/>
            <MenuModal/>

            <div className="o-container flex flex-col min-h-screen">
                <div className={ ( isHomepage ? '' : 'mb-8 ' ) + 'o-full bg-primary-lighter text-primary-base' }>
                    <div className="o-container">
                        <div className="flex-flow-between items-center py-4">
                            <div className="flex flex-col items-center">
                                <NavLink to="/" className="p-2 border-2 border-primary-base rounded font-bold">
                                    My app React
                                </NavLink>
                                <span className="text-xs mt-1 leading-none">By Florian Armanet</span>
                            </div>

                            { renderNav }
                        </div>
                    </div>
                </div>

                <Outlet/>
            </div>
        </>
    )
}

export default Nav
