import { Outlet, useLocation } from 'react-router-dom'
import NavCart from './NavCart'
import NavMain from './NavMain'
import { isTablet } from '../../utils/viewport'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import NavSearch from './NavSearch'
import Search from '../Search/Search'
import Logo from '../Logo'
import { setSearchModalOpened } from '../../store/searchStore'

const Nav = () => {
    const dispatch                                  = useDispatch()
    const location                                  = useLocation()
    const [renderNav, setRenderNav]                 = useState('')

    const routeHomepage = location.pathname === '/'

    useEffect(() => {
        dispatch(setSearchModalOpened(false))

        if (isTablet()) {
            setRenderNav(
                <div className="flex-flow-centerY">
                    <NavMain/>
                    <NavSearch/>
                    <NavCart/>
                </div>
            )

            return
        }

        setRenderNav(
            <>
                <NavMain/>
                <div className="flex-flow-centerY">
                    <NavSearch/>
                    <NavCart/>
                </div>
            </>
        )
    }, [])

    return (
        <>
            <Search/>

            <div className="o-container flex flex-col min-h-screen">
                <div className={ ( routeHomepage ? '' : 'mb-8 ' ) + 'o-full bg-primary-base text-white' }>
                    <div className="o-container">
                        <div className="flex-flow-between items-center py-4">
                            <Logo/>

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
