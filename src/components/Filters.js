import { useEffect, useState } from 'react'
import { setProductsByCategories } from '../store/productsStore'
import { useSelector } from 'react-redux'
import FiltersCategories from './FiltersCategories'

const Filters = () => {
    const productsFiltered            = useSelector(state => state.products.filtered)
    const [categories, setCategories] = useState([])

    useEffect(() => {
        setCategories(
            [...productsFiltered]
                .map(({ category }) => category)
                .filter((category, index, array) =>
                        index === array.findIndex((cat) => (
                            cat.categoryLabel === category.categoryLabel && cat.categoryCode === category.categoryCode
                        ))
                )
        )
    }, [productsFiltered])

    return (
        <div className="flex flex-col mr-8">
            <p className="text-primary-base font-bold mb-4">Filtres</p>
            <div className="bg-white border border-primary-light/50 rounded w-xs">
                <ul className="border-b border-primary-light/50">
                    <li>
                        <p className="px-4 py-2 bg-tertiary-light/30">Categories</p>
                        <ul className="px-4 pt-4 mb-8">
                            { categories.map((category, index) => <FiltersCategories category={ category } key={ index }/>) }
                        </ul>
                    </li>
                    <li>
                        <p className="px-4 py-2 bg-tertiary-light/30">Price</p>
                    </li>
                    <li>
                        <p className="px-4 py-2 bg-tertiary-light/30">Rating</p>
                    </li>
                </ul>
                <div className="flex flex-wrap justify-between px-4 py-4">
                    <button className="underline">
                        Reset All
                    </button>
                    <button className="bg-primary-base hover:bg-primary-hover transition text-white px-3 py-2 rounded">
                        Apply filters
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Filters
