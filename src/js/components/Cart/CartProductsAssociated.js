import { useSelector } from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ProductMiniature from '../ListProducts/ProductMiniature'
import { STATUS_LOADING } from '../../utils/constants'
import LoaderBlock from '../Loader/LoaderBlock'

const CartProductsAssociated = () => {
    const products = useSelector(state => state.products.products)
    const productsInCart = useSelector(state => state.products.inCart)
    const productsStatusRequest = useSelector(state => state.products.status)

    const currentCategory = productsInCart.length ? productsInCart[0].category.categoryCode : null

    const productsOfCurrentCategory = [...products].filter(product => product.category.categoryCode === currentCategory)
        .filter(product => !productsInCart.some(productInCart => product.id === productInCart.id))
        .slice(0, 4)

    const oneProductByCategory = [...products].reduce((acc, curr) => {
        if (acc.some(pdt => curr.category.categoryCode === pdt.category.categoryCode)) {
            return acc
        }

        acc.push(curr)
        return acc
    }, [])

    const productsHighlightedInCart = productsInCart.length ? productsOfCurrentCategory : oneProductByCategory

    if (!productsStatusRequest || productsStatusRequest === STATUS_LOADING) {
        return (
            <div className="flex-flow-center mt-6">
                <LoaderBlock nbBlocks={4} />
            </div>
        )
    }

    return (
        <>
            <p className="text-center text-xl mb-6">Vous pourriez aimer</p>

            <TransitionGroup component="ul" className="flex-flow-center -mx-2">
                {productsHighlightedInCart.map(product => (
                    <CSSTransition
                        in={true}
                        key={product.id}
                        timeout={500}
                        classNames="Animation-list-item"
                        unmountOnExit
                        appear
                    >
                        <li className="Card-product Card-product--sm">
                            <ProductMiniature product={product} key={product.id} />
                        </li>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </>
    )
}

export default CartProductsAssociated
