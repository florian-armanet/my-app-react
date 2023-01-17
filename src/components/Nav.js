import { Outlet, useLocation } from 'react-router-dom'
import CartModal from './CartModal'
import NavCart from './Nav/NavCart'
import NavMain from './Nav/NavMain'
import MenuModal from './MenuModal/MenuModal'
import { isTablet } from '../utils/viewport'
import { useEffect, useState } from 'react'
import FiltersModal from './Filters/FiltersModal'
import { useDispatch, useSelector } from 'react-redux'
import LoadingProducts from './LoadingData/LoadingProducts'
import LoadingCategories from './LoadingData/LoadingCategories'
import NavSearch from './Nav/NavSearch'
import SearchModal from './Search/SearchModal'
import Logo from './Logo'
import { setSearchModalOpened } from '../store/searchStore'

const Nav = () => {
    const dispatch                                  = useDispatch()
    const location                                  = useLocation()
    const [renderNav, setRenderNav]                 = useState('')
    const [loadingProducts, setLoadingProducts]     = useState('')
    const [loadingCategories, setLoadingCategories] = useState('')
    const products                                  = useSelector(state => state.products.all)
    const categories                                = useSelector(state => state.categories.all)

    const routeHomepage = location.pathname === '/'

    useEffect(() => {
        if (!products.length) {
            setLoadingProducts(<LoadingProducts/>)
        }

        if (!categories.length) {
            setLoadingCategories(<LoadingCategories/>)
        }

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
    }, [location])

    return (
        <>
            { loadingProducts }
            { loadingCategories }
            <CartModal/>
            <MenuModal/>
            <FiltersModal/>
            <SearchModal/>

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
