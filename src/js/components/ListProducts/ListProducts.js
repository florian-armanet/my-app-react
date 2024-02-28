import { useSelector } from 'react-redux'
import ProductMiniature from './ProductMiniature'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { STATUS_FAILED, STATUS_LOADING } from '../../utils/constants'
import LoaderBlock from '../Loader/LoaderBlock'

const ListProducts = () => {
    const productsFiltered      = useSelector(state => state.products.filtered)
    const productsStatusRequest = useSelector(state => state.products.status)

    if (productsFiltered.length) {
        return (
            <TransitionGroup component="ul" className="flex flex-wrap justify-center lg:justify-start -mx-2">
                { productsFiltered
                    .map(product => (
                        <CSSTransition
                            in={ true }
                            key={ product.id }
                            timeout={ 500 }
                            classNames="Animation-list-item"
                            unmountOnExit
                            appear
                        >
                            <li className="Card-product">
                                <ProductMiniature product={ product } key={ product.id }/>
                            </li>
                        </CSSTransition>
                    )) }
            </TransitionGroup>
        )
    }

    if (!productsStatusRequest || productsStatusRequest === STATUS_LOADING) {
        return (
            <LoaderBlock nbBlocks={ 16 }/>
        )
    }

    if (productsStatusRequest === STATUS_FAILED) {
        return (
            <p className="p-4 bg-tertiary-light/75 text-primary-dark font-bold">Echec de la requête !</p>
        )
    }

    return (
        <p className="p-4 bg-gray-50 text-primary-dark font-bold">Aucun résultat</p>
    )
}

export default ListProducts
