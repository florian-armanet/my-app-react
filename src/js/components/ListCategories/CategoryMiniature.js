import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { PATH_CATEGORIES } from '../../utils/constants'

const CategoryMiniature = ({ category }) => {
    const products = useSelector(state => state.products.products)
    const firstProductOfCategory = [...products].find(product => product.category.categoryCode === category.categoryCode)

    if (firstProductOfCategory) {
        return (
            <li className="o-col-12 md:o-col-3 md-down:mb-4 transition">
                <NavLink to={`${PATH_CATEGORIES + '/' + category.categoryLabelOrigin}`}>
                    <div className="h-72 group overflow-hidden">
                        <p className="z-2 absolute absolute-center bg-primary-base text-white py-1 px-2">{category.categoryLabel}</p>
                        <img src={firstProductOfCategory.image}
                            alt={category.categoryLabel}
                            className="z-1 relative w-full h-full object-cover group-hover:scale-105 group-hover:rotate-2 transition" />
                    </div>
                </NavLink>
            </li>
        )
    }
}

export default CategoryMiniature
