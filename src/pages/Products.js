import '../App.scss'
import ListProducts from '../components/ListProducts'
import Searcher from '../components/Searcher'
import Filters from '../components/Filters'

function Products () {
    return (
        <>
            <div className="flex flex-wrap justify-center mb-10">
                <Searcher/>
            </div>
            <div className="flex flex-wrap items-start">
                <Filters/>
                <ListProducts/>
            </div>
        </>
    )
}

export default Products
