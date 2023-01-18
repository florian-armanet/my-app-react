import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import debounce from '../../utils/debounce'
import { setProductsOfSearch } from '../../store/productsStore'
import { setCategoriesOfSearch } from '../../store/categoriesStore'
import { setSearchInputValue, setSearchValue } from '../../store/searchStore'

const SearchInput = () => {
    const dispatch                              = useDispatch()
    const searchValue                           = useSelector(state => state.search.searchValue)
    const searchInputValue                      = useSelector(state => state.search.searchInputValue)
    const [renderCloseIcon, setRenderCloseIcon] = useState('')

    /**
     *
     * @param event
     */
    const handleBeforeChange = (event) => {
        dispatch(setSearchInputValue(event.target.value))
    }

    /**
     *
     * @type {(function(...[*]): void)|*}
     */
    const handleChange = debounce((event) => {
        dispatch(setSearchValue(event.target.value))
    }, 1000)

    /**
     *
     */
    const onResetSearch = () => {
        dispatch(setSearchInputValue(''))
        dispatch(setSearchValue(''))
    }

    useEffect(() => {
        if (!searchValue) {
            setRenderCloseIcon('')
            dispatch(setProductsOfSearch(searchValue))
            dispatch(setCategoriesOfSearch(searchValue))
            return
        }

        setRenderCloseIcon(<i onClick={ onResetSearch }
                              className="Icon-close-light mr-2 text-primary-base cursor-pointer"></i>)
        dispatch(setProductsOfSearch(searchValue))
        dispatch(setCategoriesOfSearch(searchValue))
    }, [searchValue])

    return (
        <div
            className="lg-down:order-3 flex-flow-centerY justify-between bg-white rounded bg-primary-light/20 py-2 px-4 lg:px-8 hover:bg-primary-lighter transition-fast lg:max-w-xs w-full lg:mr-16 lg-down:mt-4">
            <input type="text"
                   placeholder="Rechercher un produit..."
                   value={ searchInputValue }
                   onChange={ e => {
                       handleBeforeChange(e)
                       handleChange(e)
                   } }
                   className="text-primary-hover font-bold placeholder:text-primary-light/75 bg-transparent outline-none flex-1 max-w-[200px]"/>
            <div className="flex-flow-centerY">
                { renderCloseIcon }
                <i className="Icon-search text-lg text-primary-base"></i>
            </div>
        </div>
    )
}

export default SearchInput
