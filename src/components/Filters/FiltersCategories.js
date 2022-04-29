const FiltersCategories = ({ category }) => {
    return (
        <li>
            <p className="px-4 py-2 bg-tertiary-light/30">Categories</p>
            <ul className="px-4 pt-4 mb-8">
                { categories.map((category, index) => <FiltersCategories category={ category } key={ index }/>) }
            </ul>
        </li>
    )
}

export default FiltersCategories
