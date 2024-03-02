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
    const dispatch = useDispatch()
    const params = useParams()
    const paramId = Number(params.id)
    const productsStatusRequest = useSelector(state => state.productsFetched.status)
    const productsFetched = useSelector(state => state.productsFetched.productsFetched)
    const products = useSelector(state => state.products.products)
    const productsInCart = useSelector(state => state.products.inCart)
    const [productQty, setProductQty] = useState(1)

    const currentProduct = [...products].find(pdt => pdt.id === paramId) || []
    const productFetched = productsFetched.some(productFetched => productFetched.id === paramId)

    /**
     *
     * @param p
     */
    const processLocalStorage = (p = {}) => {
        localStorage.setItem(PRODUCTS_IN_CART, JSON.stringify([
            ...productsInCart.filter(p => p.id !== product.id),
            {
                ...product,
                ...p,
            }
        ]))
    }

    /**
     *
     * @param event
     */
    const handleChangeQty = (event) => {
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

            processLocalStorage(payload)
            return
        }

        const payload = {
            ...currentProduct,
            quantity: Number(productQty)
        }

        dispatch(addProductInCart({ ...payload }))
        dispatch(setCartModalOpened(true))

        localStorage.setItem(PRODUCTS_IN_CART, JSON.stringify([...productsInCart, payload]))
    }

    /**
     *
     */
    useEffect(() => {
        if (productFetched) return

        dispatch(fetchProduct(params.id))
    }, [productsFetched, dispatch])

    if (productsStatusRequest === STATUS_SUCCEEDED) {
        return (
            <div className="o-grid pb-12">
                <div className="o-col-12">
                    <NavLink to={PATH_PRODUCTS} className="Button Button--primary mb-8">
                        <i className="Icon-arrow-left mr-2"></i>
                        <span>Retour aux produits</span>
                    </NavLink>
                </div>
                <div className="o-col-12 lg:o-col-6 lg-down:mb-6">
                    <img src={currentProduct.image} alt={currentProduct.title} className="lg-down:max-w-56 max-h-96" />
                </div>
                <div className="o-col-12 lg:o-col-6">
                    <p className="font-bold text-2xl mb-1">{currentProduct.title}</p>
                    <p className="text-sm mb-4">{currentProduct.category.categoryLabel}</p>
                    <p className="mb-4">{currentProduct.description}</p>
                    <p className="flex-flow-centerY mb-4">
                        {generateStarRate(roundHalf(currentProduct.rating.rate))}
                        <span className="ml-1">({currentProduct.rating.count} avis)</span>
                    </p>
                    <p className="font-bold text-primary-base text-2xl mb-4">{formatNumberToString(currentProduct.price)} €</p>
                    <div className="flex flex-wrap">
                        <input type="number"
                            min="1"
                            value={productQty}
                            onChange={handleChangeQty}
                            className="text-center text-primary-base appearance-none font-bold outline-none border-2 border-primary-light w-14 py-2 rounded" />
                        <button onClick={addToCart}
                            className="bg-primary-base hover:bg-primary-hover transition text-white px-4 py-2 rounded ml-2">
                            Ajouter au panier
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    if (productsStatusRequest === STATUS_LOADING || !productsStatusRequest) {
        return (
            <div className="Loader mx-auto my-20"></div>
        )
    }

    if (productsStatusRequest === STATUS_FAILED) {
        return (
            <p className="p-4 bg-tertiary-light/75 text-primary-dark font-bold">Echec de la requête !</p>
        )
    }
}

export default Product
