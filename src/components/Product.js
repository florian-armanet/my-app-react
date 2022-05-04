import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import fetchProduct from '../api/product'
import { STATUS_FAILED, STATUS_LOADING, STATUS_SUCCEEDED } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'

const Product = () => {
    const dispatch                            = useDispatch()
    const params                              = useParams()
    const paramId                             = Number(params.id)
    const productsStatusRequest               = useSelector(state => state.availableProducts.status)
    const productsFetched                     = useSelector(state => state.availableProducts.productFetched)
    const [currentProduct, setCurrentProduct] = useState({})
    const [content, setContent]               = useState('En attente d\'une requête...')

    useEffect(() => {
        if (productsStatusRequest === STATUS_LOADING) {
            setContent(<div className="Loader mx-auto my-20"></div>)
            return
        }

        if (productsStatusRequest === STATUS_SUCCEEDED) {
            setContent('')
            return
        }

        if (productsStatusRequest === STATUS_FAILED) {
            setContent(<p className="p-4 bg-tertiary-light/75 text-primary-dark font-bold">Echec de la requête !</p>)
            return
        }

        setContent('')

    }, [productsStatusRequest, dispatch])

    useEffect(() => {
        if (!productsFetched.some(productFetched => productFetched.id === paramId)) {
            dispatch(fetchProduct(params.id))
        }

        if (productsFetched.some(productFetched => productFetched.id === paramId)) {
            setCurrentProduct({ ...[...productsFetched].find(obj => obj.id === paramId) })
        }
    }, [productsFetched, dispatch])

    return (
        <>
            { content }
            <div className="o-grid">
                <div className="o-col-6">
                    <img src={ currentProduct.image } alt=""/>
                </div>
                <div className="o-col-6">
                    <p className="font-bold text-2xl">{ currentProduct.title }</p>
                </div>
            </div>
        </>
    )
}

export default Product
