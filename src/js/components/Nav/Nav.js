import { Outlet, useLocation } from 'react-router-dom'
import NavCart from './NavCart'
import NavMain from './NavMain'
import { isTablet } from '../../utils/viewport'
import NavSearch from './NavSearch'
import Search from '../Search/Search'
import Logo from '../Logo'

const Nav = () => {
    const location                  = useLocation()

    const routeHomepage = location.pathname === '/'

    return (
        <>
            <Search/>

            <div className="o-container flex flex-col min-h-screen">
                <div className={ ( routeHomepage ? '' : 'mb-8 ' ) + 'o-full bg-primary-base text-white' }>
                    <div className="o-container">
                        <div className="flex-flow-between items-center py-4">
                            <Logo/>

                            { isTablet() &&
                                <div className="flex-flow-centerY">
                                    <NavMain/>
                                    <NavSearch/>
                                    <NavCart/>
                                </div> }

                            { !isTablet() &&
                                <>
                                    <NavMain/>
                                    <div className="flex-flow-centerY">
                                        <NavSearch/>
                                        <NavCart/>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>

                <Outlet/>
            </div>
        </>
    )
}

export default Nav
