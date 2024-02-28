import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useEffect, useRef } from 'react'
import debounce from '../../utils/debounce'
import { setProductsOfSearch } from '../../store/productsStore'
import { setCategoriesOfSearch } from '../../store/categoriesStore'
import { setSearchValue } from '../../store/searchStore'

const SearchInput = () => {
    const dispatch = useDispatch()
    const searchValue = useSelector(state => state.search.searchValue)
    const modalOpened = useSelector(state => state.search.modalOpened)
    const inputRef = useRef()

    const handleChange = (event) => {
        dispatch(setSearchValue(event.target.value))

        if (!event.target.value) {
            dispatch(setProductsOfSearch(event.target.value))
            dispatch(setCategoriesOfSearch(event.target.value))
            return
        }

        dispatch(setProductsOfSearch(event.target.value))
        dispatch(setCategoriesOfSearch(event.target.value))
    }

    /**
     *
     * @type {(function(...[*]): void)|*}
     */
    const handleChangeDebounced = useCallback(debounce(handleChange, 1000), [searchValue])

    /**
     * 
     */
    const handleResetSearch = () => {
        dispatch(setSearchValue(''))
        inputRef.current.value = ''
    }

    useEffect(() => {
        if (modalOpened) {
            inputRef.current.value = searchValue
            inputRef.current.focus()
        }
    }, [modalOpened])

    return (
        <div
            className="lg-down:order-3 flex-flow-centerY justify-between bg-white rounded bg-primary-light/20 py-2 px-4 lg:px-8 hover:bg-primary-lighter transition-fast lg:max-w-xs w-full lg:mr-16 lg-down:mt-4">
            <input type="text"
                ref={inputRef}
                placeholder="Rechercher un produit..."
                onChange={handleChangeDebounced}
                className="text-primary-hover font-bold placeholder:text-primary-light/75 bg-transparent outline-none flex-1 max-w-[200px]" />
            <div className="flex-flow-centerY">
                {searchValue && <i onClick={handleResetSearch}
                    className="Icon-close-light mr-2 text-primary-base cursor-pointer"></i>}
                <i className="Icon-search text-lg text-primary-base"></i>
            </div>
        </div>
    )
}

export default SearchInput
