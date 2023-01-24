import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { setSearchModalOpened } from '../../store/searchStore'
import Logo from '../Logo'
import SearchResults from './SearchResults'
import SearchInput from './SearchInput'
import { useEffect } from 'react'

const Search = () => {
    const dispatch    = useDispatch()
    const modalOpened = useSelector(state => state.search.modalOpened)

    /**
     *
     */
    const closeModal = () => {
        dispatch(setSearchModalOpened(false))
    }

    useEffect(() => {
        if (modalOpened) {
            document.body.classList.add('remove-scrollbar')
            return
        }

        document.body.classList.remove('remove-scrollbar')
    }, [modalOpened])

    return (
        <>
            <CSSTransition in={ modalOpened } classNames="Animation-translateX-speed" timeout={ 300 } unmountOnExit
                           appear>
                <div
                    className="z-6 fixed top-0 left-0 right-0 bg-white pt-4 lg:pt-8 sm-down:bottom-0 sm:max-h-screen overflow-y-auto overflow-x-hidden shadow-lg shadow-gray-200/40 Scrollbar Scrollbar--light">
                    <div className="flex-flow-between items-center px-4 lg:px-8 pb-4 lg:pb-8">
                        <div className="text-primary-base text-sm">
                            <Logo color="primary-base"/>
                        </div>

                        <SearchInput/>

                        <div onClick={ closeModal }
                             className="lg-down:order-2 w-8 h-8 rounded-full flex-flow-center bg-primary-lighter hover:bg-gray-50 transition-fast cursor-pointer">
                            <i className="Icon-close-light text-lg text-primary-base font-bold"></i>
                        </div>
                    </div>

                    <SearchResults/>
                </div>
            </CSSTransition>

            <CSSTransition in={ modalOpened } classNames="Animation-opacity" timeout={ 300 } unmountOnExit appear>
                <div onClick={ closeModal } className="z-5 fixed inset-0 backdrop-blur-sm backdrop-brightness-95"></div>
            </CSSTransition>
        </>

    )
}

export default Search
