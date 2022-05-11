import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import fetchProducts from '../api/products'
import fetchCategories from '../api/categories'
import { STATUS_FAILED, STATUS_LOADING, STATUS_SUCCEEDED } from '../utils/constants'
import CategoryMiniature from './ListCategories/CategoryMiniature'

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
            setContentFetchingProcess(<div className="Loader mx-auto my-20"></div>)
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
            <ul className="o-grid">
                { categories
                    .map(category => <CategoryMiniature key={ category.categoryCode } category={ category }/>)
                }
            </ul>
        )
    }

    return (
        <>
            { contentFetchingProcess }
        </>
    )
}

export default ListCategories
