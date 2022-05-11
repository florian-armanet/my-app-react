import fetchProducts from '../api/products'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { STATUS_FAILED, STATUS_LOADING, STATUS_SUCCEEDED } from '../utils/constants'
import ProductMiniature from './ListProducts/ProductMiniature'
import { setProductsFiltered } from '../store/productsStore'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const ListProducts = () => {
    const dispatch              = useDispatch()
    const products              = useSelector(state => state.products.all)
    const productsFiltered      = useSelector(state => state.products.filtered)
    const productsStatusRequest = useSelector(state => state.products.status)
    const [content, setContent] = useState('En attente d\'une requête...')
    const getCategoriesSelected = useSelector(state => state.filtersCategories.categoriesSelected)

    useEffect(() => {
        if (!productsStatusRequest) {
            dispatch(fetchProducts())
            return
        }

        if (productsStatusRequest === STATUS_LOADING) {
            setContent(<div className="Loader mx-auto my-20"></div>)
            return
        }

        if (productsStatusRequest === STATUS_SUCCEEDED) {
            setContent('')
            dispatch(setProductsFiltered(
                [...products]
                    .filter(product => {
                        return getCategoriesSelected.includes(product.category.categoryCode) || !getCategoriesSelected.length
                    })
            ))
            return
        }

        if (productsStatusRequest === STATUS_FAILED) {
            setContent(<p className="p-4 bg-tertiary-light/75 text-primary-dark font-bold">Echec de la requête !</p>)
            return
        }

        setContent('')

    }, [productsStatusRequest, products, getCategoriesSelected, dispatch])

    if (productsFiltered.length) {
        return (
            <div className="flex-1">
                <TransitionGroup component="ul" className="flex flex-wrap -mx-2">
                    { productsFiltered
                        .map(product => (
                            <CSSTransition
                                in={ true }
                                key={ product.id }
                                timeout={ 500 }
                                classNames="list"
                                unmountOnExit
                                appear
                            >
                                <ProductMiniature product={ product } key={ product.id }/>
                            </CSSTransition>
                        )) }
                </TransitionGroup>
            </div>
        )
    }

    return (
        <>
            { content }
        </>
    )

}

export default ListProducts
