import '../App.scss'
import Products from '../components/Products'
import Searcher from '../components/Searcher'
import Filters from '../components/Filters'

function ListProducts () {
    return (
        <>
            <div className="flex flex-wrap justify-center mb-10">
                <Searcher/>
            </div>
            <div className="flex flex-wrap items-start">
                <Filters/>
                <Products/>
            </div>
        </>
    )
}

export default ListProducts
