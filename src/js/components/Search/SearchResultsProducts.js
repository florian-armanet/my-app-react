import { NavLink } from 'react-router-dom'
import { PATH_PRODUCTS } from '../../utils/constants'
import { useSelector } from 'react-redux'
import ProductMiniature from '../ListProducts/ProductMiniature'

const SearchResultsProducts = () => {
    const productsOfSearch = useSelector(state => state.products.productsOfSearch)

    return (
        <div className="o-col-12 lg:o-col-9 flex flex-col mb-4 text-primary-500">
            <p className="mb-4 pb-1 font-bold border-b">
                <span>Produits </span>
                <span>({ productsOfSearch.length })</span>
            </p>

            <ul className="flex flex-wrap justify-center lg:justify-start -mx-2">
                { productsOfSearch.map(product =>
                    <li className="Card-product" key={ product.id }>
                        <ProductMiniature product={ product }/>
                    </li>
                ) }
            </ul>

            <div className="flex flex-wrap">
                <NavLink to={ PATH_PRODUCTS } className="Button Button--primary">Voir tous les produits</NavLink>
            </div>
        </div>
    )
}

export default SearchResultsProducts
