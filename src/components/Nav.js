import { NavLink, Outlet, useLocation } from 'react-router-dom'
import CartModal from './CartModal'
import NavCart from './Nav/NavCart'
import NavMain from './Nav/NavMain'
import MenuModal from './MenuModal/MenuModal'
import { isTablet } from '../utils/viewport'
import { useEffect, useState } from 'react'
import FiltersModal from './Filters/FiltersModal'
import { PATH_CART, PATH_CATEGORIES, PATH_PRODUCTS } from '../utils/constants'
import { useSelector } from 'react-redux'
import LoadingProducts from './LoadingData/LoadingProducts'
import LoadingCategories from './LoadingData/LoadingCategories'

const Nav = () => {
    const location                                  = useLocation()
    const [renderNav, setRenderNav]                 = useState('')
    const [loadingProducts, setLoadingProducts]     = useState('')
    const [loadingCategories, setLoadingCategories] = useState('')
    const products                                  = useSelector(state => state.products.all)
    const categories                                = useSelector(state => state.categories.all)

    const isHomepage      = location.pathname === '/'
    const routeCart       = location.pathname === PATH_CART
    const routeCategories = location.pathname === PATH_CATEGORIES
    const routeProducts   = location.pathname === PATH_PRODUCTS

    useEffect(() => {
        if (( routeCart || routeProducts ) && !products.length) {
            setLoadingProducts(<LoadingProducts/>)
        }
        if (routeCategories && !categories.length) {
            setLoadingProducts(<LoadingCategories/>)
        }

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
    }, [location])

    return (
        <>
            { loadingProducts }
            { loadingCategories }
            <CartModal/>
            <MenuModal/>
            <FiltersModal/>

            <div className="o-container flex flex-col min-h-screen">
                <div className={ ( isHomepage ? '' : 'mb-8 ' ) + 'o-full bg-primary-base text-white' }>
                    <div className="o-container">
                        <div className="flex-flow-between items-center py-4">
                            <div className="flex flex-col items-center">
                                <NavLink to="/" className="p-2 border-2 border-white rounded font-bold">
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
