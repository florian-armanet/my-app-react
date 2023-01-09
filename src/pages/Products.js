import '../App.scss'
import ListProducts from '../components/ListProducts'
import Searcher from '../components/Searcher'
import Filters from '../components/Filters'

const Products = () => {
    return (
        <>
            <div className="flex flex-wrap justify-center mb-4 lg:mb-10">
                <Searcher/>
            </div>
            <div className="flex flex-wrap items-start justify-center">
                <Filters/>
                <ListProducts/>
            </div>
        </>
    )
}

export default Products
