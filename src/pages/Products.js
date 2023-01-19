import '../App.scss'
import ListProducts from '../components/ListProducts/ListProducts'
import Filters from '../components/Filters/Filters'

const Products = () => {
    return (
        <>
            <div className="flex flex-wrap items-start justify-center">
                <Filters/>
                <ListProducts/>
            </div>
        </>
    )
}

export default Products
