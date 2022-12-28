import { NavLink } from 'react-router-dom'
import { PATH_PRODUCTS } from '../utils/constants'

const Home = () => {
    return (
        <div className="o-full relative flex-1">
            <div className="z-0 absolute inset-0">
                <img src="/app_react_home.jpg" alt="" className="w-full h-full object-cover"/>
            </div>
            <span className="z-1 absolute inset-0 bg-white/30"></span>
            <div className="z-2 absolute absolute-center">
                <NavLink to={ PATH_PRODUCTS } className="Button-portfolio mb-8">
                    Voir les produits
                </NavLink>
            </div>
            {/*<section>*/ }
            {/*    <ListCategories/>*/ }
            {/*</section>*/ }
        </div>
    )
}

export default Home
