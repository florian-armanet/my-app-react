import '../App.scss'
import ListProducts from '../components/ListProducts/ListProducts'
import Filters from '../components/Filters/Filters'
import Sortings from '../components/Filters/Sortings'
import { useSelector } from 'react-redux'

const Products = () => {
    const productsFiltered = useSelector(state => state.products.filtered)

    return (
        <div className="flex flex-wrap items-start justify-center">
            <Filters/>

            <div className="lg:flex-1">
                <div className="flex-flow-between items-center lg-down:justify-center mb-4">
                    <p className="lg-down:text-center lg-down:w-full lg-down:order-2">{ productsFiltered.length } {productsFiltered.length > 1 ? 'produits' : 'produit'}</p>
                    <Sortings/>
                </div>

                <ListProducts/>
            </div>
        </div>
    )
}

export default Products
