import { NavLink, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import fetchProduct from '../api/product'
import { PATH_PRODUCTS, STATUS_FAILED, STATUS_LOADING, STATUS_SUCCEEDED } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { generateStarRate } from '../utils/generateStarRate'
import { roundHalf } from '../utils/mathRound'
import formatNumberToString from '../utils/formatNumberToString'
import { addProductInCart, setProductQuantity } from '../store/productsStore'
import { setCartModalOpened } from '../store/cartStore'

const Product = () => {
    const dispatch                                            = useDispatch()
    const params                                              = useParams()
    const paramId                                             = Number(params.id)
    const productsStatusRequest                               = useSelector(state => state.productsFetched.status)
    const productsFetched                                     = useSelector(state => state.productsFetched.productsFetched)
    const productsInCart                                      = useSelector(state => state.products.inCart)
    const [currentProduct, setCurrentProduct]                 = useState({})
    const [productQty, setProductQty]                         = useState(1)
    const [contentFetchingProcess, setContentFetchingProcess] = useState(<p>En attente d\'une requête...</p>)

    /**
     *
     */
    useEffect(() => {
        if (productsStatusRequest === STATUS_LOADING) {
            setContentFetchingProcess(<div className="Loader mx-auto my-20"></div>)
            return
        }

        if (productsStatusRequest === STATUS_SUCCEEDED) {
            setContentFetchingProcess(<></>)
            return
        }

        if (productsStatusRequest === STATUS_FAILED) {
            setContentFetchingProcess(
                <p className="p-4 bg-tertiary-light/75 text-primary-dark font-bold">Echec de la requête !</p>
            )
            return
        }

        setContentFetchingProcess(<></>)

    }, [productsStatusRequest, dispatch])

    /**
     *
     */
    useEffect(() => {
        if (!productsFetched.some(productFetched => productFetched.id === paramId)) {
            dispatch(fetchProduct(params.id))
            return
        }

        setCurrentProduct({ ...[...productsFetched].find(obj => obj.id === paramId) })
    }, [productsFetched, dispatch])

    /**
     *
     * @param event
     */
    const changeQty = (event) => {
        setProductQty(event.target.value)
    }

    /**
     *
     */
    const addToCart = () => {
        const productInCart = productsInCart.find(productInCart => productInCart.id === currentProduct.id)

        if (productInCart) {
            const payload = {
                id: currentProduct.id,
                quantity: productInCart.quantity + Number(productQty)
            }

            dispatch(setProductQuantity({ ...payload }))
            dispatch(setCartModalOpened(true))
            return
        }

        const payload = {
            ...currentProduct,
            quantity: Number(productQty)
        }
        dispatch(addProductInCart({ ...payload }))
        dispatch(setCartModalOpened(true))
    }

    if (Object.keys(currentProduct).length) {
        return (
            <div className="o-grid pb-12">
                <div className="o-col-12">
                    <NavLink to={ PATH_PRODUCTS } className="Button Button--primary mb-8">
                        <i className="Icon-arrow-left mr-2"></i>
                        <span>Retour aux produits</span>
                    </NavLink>
                </div>
                <div className="o-col-6">
                    <div className="relative">
                        <p className="z-1 absolute top-0 left-0 mb-4  bg-secondary-base text-primary-base font-bold px-2 py-1">
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
                               value={ productQty }
                               onChange={ changeQty }
                               className="text-center text-primary-base appearance-none font-bold outline-none border-2 border-primary-light w-14 py-2 rounded"/>
                        <button onClick={ addToCart }
                                className="bg-primary-base hover:bg-primary-hover transition text-white px-4 py-2 rounded ml-2">
                            Ajouter au panier
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            { contentFetchingProcess }
        </>
    )
}

export default Product
