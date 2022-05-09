import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import fetchCategories from '../api/categories'
import { STATUS_FAILED, STATUS_LOADING, STATUS_SUCCEEDED } from '../utils/constants'
import CategoryMiniature from './ListCategories/CategoryMiniature'

const ListCategories = () => {
    const dispatch                                            = useDispatch()
    const categories                                          = useSelector(state => state.categories.all)
    const categoriesStatusRequest                             = useSelector(state => state.categories.status)
    const [contentFetchingProcess, setContentFetchingProcess] = useState(<p>En attente d'une requête...</p>)

    useEffect(() => {
        if (!categoriesStatusRequest) {
            dispatch(fetchCategories())
            return
        }

        if (categoriesStatusRequest === STATUS_LOADING) {
            setContentFetchingProcess(<div className="Loader mx-auto my-20"></div>)
            return
        }

        if (categoriesStatusRequest === STATUS_SUCCEEDED) {
            setContentFetchingProcess(<></>)
            return
        }

        if (categoriesStatusRequest === STATUS_FAILED) {
            setContentFetchingProcess(<p className="p-4 bg-tertiary-light/75 text-primary-dark font-bold">Echec de la
                requête !</p>)
            return
        }

        setContentFetchingProcess(<></>)

    }, [categoriesStatusRequest, dispatch])

    if (categories.length) {
        return (
            <div>
                <p className="text-center py-20 font-bold text-4xl">HOMEPAGE</p>
                <ul>
                    { categories
                        .map(category => <CategoryMiniature key={ category.categoryCode } category={ category }/>)
                    }
                </ul>
            </div>
        )
    }

    return (
        <>
            <p className="text-center py-20 font-bold text-4xl">HOMEPAGE</p>
            { contentFetchingProcess }
        </>
    )
}

export default ListCategories
