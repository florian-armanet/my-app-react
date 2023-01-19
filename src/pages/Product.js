import { NavLink, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import fetchProduct from '../api/product'
import { PATH_PRODUCTS, PRODUCTS_IN_CART, STATUS_FAILED, STATUS_LOADING, STATUS_SUCCEEDED } from '../utils/constants'
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
    const products                                            = useSelector(state => state.products.all)
    const [currentProduct, setCurrentProduct]                 = useState({})
    const [productQty, setProductQty]                         = useState(1)
    const [contentFetchingProcess, setContentFetchingProcess] = useState(<p>En attente d\'une requête...</p>)

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

    /**
     *
     */
    useEffect(() => {
        if (productsStatusRequest === STATUS_LOADING && !Object.keys(currentProduct).length) {
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

    }, [productsStatusRequest, currentProduct, dispatch])

    /**
     *
     */
    useEffect(() => {
        const productFetched = productsFetched.some(productFetched => productFetched.id === paramId)
        if (productFetched) return

        dispatch(fetchProduct(params.id))
    }, [productsFetched, dispatch])

    /**
     *
     */
    useEffect(() => {
        if (!products.length) return

        const currentPdt = [...products].find(pdt => pdt.id === paramId)
        setCurrentProduct(currentPdt)
    }, [products, dispatch])

    useEffect(() => {
        const productInCart = productsInCart.find(productInCart => productInCart.id === currentProduct.id)
        if (productInCart) {
            localStorage.setItem(PRODUCTS_IN_CART, JSON.stringify(productsInCart))
            return
        }

        localStorage.setItem(PRODUCTS_IN_CART, JSON.stringify(productsInCart))
    }, [productsInCart, dispatch])

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
                    <img src={ currentProduct.image } alt={ currentProduct.title }/>
                </div>
                <div className="o-col-6">
                    <p className="font-bold text-2xl mb-1">{ currentProduct.title }</p>
                    <p className="text-sm mb-4">{ currentProduct.category.categoryLabel }</p>
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
