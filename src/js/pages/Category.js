import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { PATH_CATEGORIES, STATUS_FAILED, STATUS_LOADING, STATUS_SUCCEEDED } from '../utils/constants'
import fetchProductsOfCategory from '../api/productsOfCategory'
import ProductMiniature from '../components/ListProducts/ProductMiniature'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import LoaderBlock from '../components/Loader/LoaderBlock'
import { setCurrentProductsOfCategory } from '../store/productsOfCategoryStore'

const Category = () => {
    const location                                            = useLocation()
    const dispatch                                            = useDispatch()
    const params                                              = useParams()
    const paramCategoryLabelOrigin                            = params.categoryLabelOrigin
    const categories                                          = useSelector(state => state.categories.all)
    const currentCategory                                     = [...categories].find(cat => cat.categoryLabelOrigin === paramCategoryLabelOrigin)
    const productsOfCategoryStatusRequest                     = useSelector(state => state.productsOfCategory.status)
    const productsOfCategoryFetched                           = useSelector(state => state.productsOfCategory.productsOfCategoryFetched)
    const currentProductsOfCategory                           = useSelector(state => state.productsOfCategory.currentProductsOfCategory)
    const [contentFetchingProcess, setContentFetchingProcess] = useState(<p>En attente d\'une requête...</p>)

    /**
     *
     */
    useEffect(() => {
        if (productsOfCategoryStatusRequest === STATUS_LOADING) {
            dispatch(setCurrentProductsOfCategory([]))
            setContentFetchingProcess(<LoaderBlock nbBlocks={ 8 }/>)
            return
        }

        if (productsOfCategoryStatusRequest === STATUS_SUCCEEDED) {
            setContentFetchingProcess(<></>)
            return
        }

        if (productsOfCategoryStatusRequest === STATUS_FAILED) {
            setContentFetchingProcess(
                <p className="p-4 bg-tertiary-light/75 text-primary-dark font-bold">Echec de la requête !</p>
            )
            return
        }

        setContentFetchingProcess(<></>)

    }, [productsOfCategoryStatusRequest, dispatch])

    /**
     *
     */
    useEffect(() => {
        if (!productsOfCategoryFetched.some(product => product.category.categoryLabelOrigin === paramCategoryLabelOrigin)) {
            dispatch(fetchProductsOfCategory(paramCategoryLabelOrigin))
            return
        }

        dispatch(setCurrentProductsOfCategory([...productsOfCategoryFetched].filter(product => product.category.categoryLabelOrigin === paramCategoryLabelOrigin)))
    }, [productsOfCategoryFetched, location, dispatch])

    if (currentProductsOfCategory.length) {
        return (
            <div>
                <h1 className="text-center text-primary-light font-bold text-2xl lg:text-3xl mb-4 lg:mb-10">{ currentCategory.categoryLabel }</h1>
                <TransitionGroup component="ul" className="flex flex-wrap justify-center lg:justify-start -mx-2">
                    { currentProductsOfCategory.map(product => (
                        <CSSTransition
                            in={ true }
                            key={ product.id }
                            timeout={ 500 }
                            classNames="list"
                            unmountOnExit
                            appear
                        >
                            <ProductMiniature product={ product } cardType="Card-product Card-product--sm"
                                              key={ product.id }/>
                        </CSSTransition>
                    )) }
                </TransitionGroup>
            </div>
        )
    }

    return (
        <>
            { contentFetchingProcess }
        </>
    )
}

export default Category
