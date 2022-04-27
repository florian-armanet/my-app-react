import fetchProducts from '../api/products'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { STATUS_FAILED, STATUS_LOADING, STATUS_SUCCEEDED } from '../utils/constants'
import ProductItem from './ProductItem'

const Products = () => {
    const dispatch                                    = useDispatch()
    const getSearcher                                 = useSelector(state => state.searcher.searchValue)
    const products                                    = useSelector(state => state.products.value)
    const productsStatusRequest                       = useSelector(state => state.products.status)
    const [content, setContent]                       = useState('En attente d\'une requête...')
    const [productsBySearcher, setProductsBySearcher] = useState([])

    useEffect(() => {
        if (!productsStatusRequest) {
            dispatch(fetchProducts())
            return
        }

        if (productsStatusRequest === STATUS_LOADING) {
            setContent('Loading...')
            return
        }

        if (productsStatusRequest === STATUS_SUCCEEDED) {
            setContent('Succès de la requête !')
            setProductsBySearcher([...products].filter(product => {
                return product.title.trim().toLowerCase().includes(getSearcher.trim().toLowerCase())
            }))
            return
        }

        if (productsStatusRequest === STATUS_FAILED) {
            setContent('Echec de la requête')
            return
        }

        setContent('')

    }, [productsStatusRequest, products, getSearcher, dispatch])

    return (
        <div>
            <p className="mb-8">{ content }</p>
            <ul className="flex flex-wrap justify-center">
                { productsBySearcher.map(product => <ProductItem product={ product } key={ product.id }/>) }
            </ul>
        </div>
    )
}

export default Products
