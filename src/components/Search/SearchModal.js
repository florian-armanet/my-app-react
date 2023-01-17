import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { setSearchModalOpened } from '../../store/searchStore'
import Logo from '../Logo'
import SearchModalResults from './SearchModalResults'

const SearchModal = () => {
    const dispatch    = useDispatch()
    const modalOpened = useSelector(state => state.search.modalOpened)

    /**
     *
     */
    const closeModal = () => {
        dispatch(setSearchModalOpened(false))
    }

    return (
        <>
            <CSSTransition in={ modalOpened } classNames="Animation-translateX-speed" timeout={ 300 } unmountOnExit appear>
                <div
                    className="z-6 fixed top-0 left-0 right-0 bg-white pt-4 lg:pt-8 sm-down:bottom-0 sm-down:overflow-y-auto shadow-lg shadow-gray-200/40">
                    <div className="flex-flow-between items-center px-4 lg:px-8 pb-4 lg:pb-8">
                        <div className="text-primary-base text-sm">
                            <Logo color="primary-base"/>
                        </div>

                        <div
                            className="flex-flow-centerY justify-between bg-white rounded bg-primary-light/20 py-2 px-8 hover:bg-primary-lighter transition-fast max-w-xs w-full mr-16">
                            <input type="text"
                                   placeholder="Rechercher un produit..."
                                   className="text-primary-hover font-bold placeholder:text-primary-base bg-transparent outline-none flex-1 max-w-[200px]"/>
                            <div className="flex-flow-centerY">
                                <i className="Icon-search text-lg text-primary-base"></i>
                            </div>
                        </div>

                        <div onClick={ closeModal }
                             className="w-8 h-8 rounded-full flex-flow-center bg-primary-lighter hover:bg-gray-50 transition-fast cursor-pointer">
                            <i className="Icon-close-light text-lg text-primary-base font-bold"></i>
                        </div>
                    </div>

                    <SearchModalResults/>
                </div>
            </CSSTransition>

            <CSSTransition in={ modalOpened } classNames="Animation-opacity" timeout={ 300 } unmountOnExit appear>
                <div onClick={ closeModal } className="z-5 fixed inset-0 backdrop-blur-sm backdrop-brightness-95"></div>
            </CSSTransition>
        </>

    )
}

export default SearchModal
