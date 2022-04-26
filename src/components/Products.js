import fetchProducts from '../api/products'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { STATUS_FAILED, STATUS_LOADING, STATUS_SUCCEEDED } from '../utils/constants'
import ProductItem from './ProductItem'

const Products = () => {
    const dispatch              = useDispatch()
    const products              = useSelector(state => state.products.value)
    const productsStatusRequest = useSelector(state => state.products.status)
    const [content, setContent] = useState("En attente d'une requête...")

    useEffect(() => {
        if (!productsStatusRequest) {
            dispatch(fetchProducts())
        }

        if (productsStatusRequest === STATUS_LOADING) {
            setContent('Loading...')
        }

        if (productsStatusRequest === STATUS_SUCCEEDED) {
            setContent('Succès de la requête !')
        }

        if (productsStatusRequest === STATUS_FAILED) {
            setContent('Echec de la requête')
        }
    }, [productsStatusRequest, products, dispatch])

    return (
        <div>
            <p className="mb-8">{ content }</p>
            <ul className="flex flex-wrap">
                {products.map(product => <ProductItem product={product} key={product.id}/>)}
            </ul>
        </div>
    )
}

export default Products
