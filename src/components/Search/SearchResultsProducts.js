import { NavLink } from 'react-router-dom'
import { PATH_PRODUCTS } from '../../utils/constants'
import { useSelector } from 'react-redux'
import ProductMiniature from '../ListProducts/ProductMiniature'

const SearchResultsProducts = () => {
    const productsOfSearch = useSelector(state => state.products.productsOfSearch)

    return (
        <div className="o-col-12 lg:o-col-9 flex flex-col mb-4 text-primary-500">
            <p className="mb-2 pb-1 font-bold border-b">
                <span>Produits </span>
                <span>({ productsOfSearch.length })</span>
            </p>

            <ul className="flex flex-wrap justify-center lg:justify-start -mx-2">
                { productsOfSearch.map(product => <ProductMiniature product={ product } key={ product.id }/>)}
            </ul>

            <NavLink to={ PATH_PRODUCTS } className="Button Button--primary">Voir tous les produits</NavLink>
        </div>
    )
}

export default SearchResultsProducts
