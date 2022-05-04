import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import fetchProduct from '../api/product'
import { STATUS_FAILED, STATUS_LOADING, STATUS_SUCCEEDED } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { generateStarRate } from '../utils/generateStarRate'
import { roundHalf } from '../utils/mathRound'
import formatNumberToString from '../utils/formatNumberToString'

const Product = () => {
    const dispatch                            = useDispatch()
    const params                              = useParams()
    const paramId                             = Number(params.id)
    const productsStatusRequest               = useSelector(state => state.availableProducts.status)
    const productsFetched                     = useSelector(state => state.availableProducts.productFetched)
    const [currentProduct, setCurrentProduct] = useState({})
    const [content, setContent]               = useState(<p>En attente d\'une requête...</p>)

    useEffect(() => {
        if (productsStatusRequest === STATUS_LOADING) {
            setContent(<div className="Loader mx-auto my-20"></div>)
            return
        }

        if (productsStatusRequest === STATUS_SUCCEEDED) {
            setContent(<></>)
            return
        }

        if (productsStatusRequest === STATUS_FAILED) {
            setContent(<p className="p-4 bg-tertiary-light/75 text-primary-dark font-bold">Echec de la requête !</p>)
            return
        }

        setContent(<></>)

    }, [productsStatusRequest, dispatch])

    useEffect(() => {
        if (!productsFetched.some(productFetched => productFetched.id === paramId)) {
            dispatch(fetchProduct(params.id))
            return
        }

        setCurrentProduct({ ...[...productsFetched].find(obj => obj.id === paramId) })
    }, [productsFetched, dispatch])

    if (Object.keys(currentProduct).length) {
        return (
            <div className="o-grid">
                <div className="o-col-6">
                    <div className="relative">
                        <p className="z-1 absolute top-0 left-0 mb-4 bg-tertiary-base text-secondary-dark font-bold px-2 py-1">
                            { currentProduct.category }
                        </p>
                        <img src={ currentProduct.image } alt={ currentProduct.title }/>
                    </div>
                </div>
                <div className="o-col-6">
                    <p className="font-bold text-2xl mb-4">{ currentProduct.title }</p>
                    <p className="mb-4">{ currentProduct.description }</p>
                    <p className="flex-flow-centerY mb-4">
                        { generateStarRate(roundHalf(currentProduct.rating.rate)) }
                        <span className="ml-1">({ currentProduct.rating.count } avis)</span>
                    </p>
                    <p className="font-bold text-secondary-base text-2xl mb-4">{ formatNumberToString(currentProduct.price) } €</p>
                    <div className="flex flex-wrap">
                        <input type="number"
                               min="1"
                               value="1"
                               className="text-center appearance-none outline-none border-2 border-primary-base w-12 py-2 text-center border-gray-200 rounded"/>
                        <button
                            className="bg-primary-base hover:bg-primary-hover transition text-white px-3 py-2 rounded ml-2">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            { content }
        </>
    )
}

export default Product
