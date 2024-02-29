import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { PATH_CATEGORIES } from '../../utils/constants'
import { setSearchModalOpened } from '../../store/searchStore'

const SearchResultsHighlighted = () => {
    const categories = useSelector(state => state.categories.categories)
    const ulRef = useRef()
    const modalOpened = useSelector(state => state.search.modalOpened)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useLayoutEffect(() => {
        setTimeout(() => {
            let ctx = gsap.context(() => {
                gsap.to('.Gsap-search-item', {
                    opacity: 1,
                    duration: 0.25,
                    transform: 'rotateX(0)',
                    stagger: 0.1,
                })
            }, ulRef)
            return () => ctx.revert() // cleanup
        }, 200)
    }, [modalOpened])

    const handleCLick = (category) => {
        dispatch(setSearchModalOpened(false))
        navigate(`${PATH_CATEGORIES + '/' + category.categoryLabelOrigin}`)
    }

    return (
        <div className="lg:px-8 pb-4">
            <p className="mb-2 text-primary-light text-center">Recherches populaires</p>
            <div style={{ minHeight: '160px' }}>
                <ul ref={ulRef}
                    className="flex flex-col justify-center items-center max-w-646 mx-auto text-primary-base">
                    {categories.map((category, index) =>
                        <li className="Gsap-search-item text-xl hover:bg-primary-lighter/50 px-4 py-1 rounded-full cursor-pointer"
                            onClick={() => handleCLick(category)}
                            key={index}>
                            {category.categoryLabel}
                        </li>)}
                </ul>
            </div>
        </div>
    )
}

export default SearchResultsHighlighted
