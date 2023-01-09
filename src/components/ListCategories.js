import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import fetchProducts from '../api/products'
import fetchCategories from '../api/categories'
import { STATUS_FAILED, STATUS_LOADING, STATUS_SUCCEEDED } from '../utils/constants'
import CategoryMiniature from './ListCategories/CategoryMiniature'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const ListCategories = () => {
    const dispatch                                            = useDispatch()
    const categories                                          = useSelector(state => state.categories.all)
    const categoriesStatusRequest                             = useSelector(state => state.categories.status)
    const productsStatusRequest                               = useSelector(state => state.products.status)
    const [contentFetchingProcess, setContentFetchingProcess] = useState(<p>En attente d'une requête...</p>)

    useEffect(() => {
        if (!categoriesStatusRequest) {
            dispatch(fetchCategories())
            return
        }

        if (!productsStatusRequest) {
            dispatch(fetchProducts())
            return
        }

        if (categoriesStatusRequest === STATUS_LOADING && productsStatusRequest === STATUS_LOADING) {
            const nbBlocksOfLoader = new Array(4).fill().map((_, index) => index)
            setContentFetchingProcess(
                <ul className="o-grid">
                    { nbBlocksOfLoader.map(nb => <li className="o-col-12 md:o-col-3 md-down:mb-4" key={ nb }>
                        <div className="Loader-block h-72 mb-4"></div>
                    </li>) }
                </ul>
            )
            return
        }

        if (categoriesStatusRequest === STATUS_SUCCEEDED && productsStatusRequest === STATUS_SUCCEEDED) {
            setContentFetchingProcess(<></>)
            return
        }

        if (categoriesStatusRequest === STATUS_FAILED || productsStatusRequest === STATUS_FAILED) {
            setContentFetchingProcess(
                <p className="p-4 bg-tertiary-light/75 text-primary-dark font-bold">Echec de la requête !</p>
            )
            return
        }

        setContentFetchingProcess(<></>)

    }, [categoriesStatusRequest, productsStatusRequest, dispatch])

    if (categories.length) {
        return (
            <section>
                <h2 className="mb-6 text-3xl text-primary-base font-bold">Nos catégories</h2>
                <TransitionGroup component="ul" className="o-grid">
                    { categories
                        .map((category) => (
                            <CSSTransition
                                in={ true }
                                key={ category.categoryCode }
                                timeout={ 500 }
                                classNames="list"
                                unmountOnExit
                                appear
                            >
                                <CategoryMiniature key={ category.categoryCode } category={ category }/>
                            </CSSTransition>
                        )) }
                </TransitionGroup>
            </section>
        )
    }

    return (
        <>
            { contentFetchingProcess }
        </>
    )
}

export default ListCategories
