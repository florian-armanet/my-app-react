import { NavLink } from 'react-router-dom'
import { PATH_CATEGORIES, PATH_HOME, PATH_PRODUCTS } from '../utils/constants'

function Error () {
    return (
        <>
            <p className="text-center py-12 font-bold text-4xl">Oupsss ! Page inexistante</p>
            <div className="flex-flow-center flex-col">
                <NavLink to={ PATH_HOME } className="Button Button--primary m-2">Retour à la homepage</NavLink>
                <NavLink to={ PATH_PRODUCTS } className="Button Button--primary m-2">Produits</NavLink>
                <NavLink to={ PATH_CATEGORIES } className="Button Button--primary m-2">Categories</NavLink>
            </div>
        </>
    )
}

export default Error
