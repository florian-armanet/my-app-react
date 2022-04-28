const FiltersCategories = ({ category }) => {
    return (
        <li className="flex flex-wrap items-center mb-1">
            <input type="checkbox"
                   id={ category.categoryCode }
                   className="cursor-pointer appearance-none mr-2 w-5 h-5 border border-primary-base rounded checked:bg-primary-base"/>
            <label htmlFor={ category.categoryCode } className="cursor-pointer font-bold">{ category.categoryLabel }</label>
        </li>
    )
}

export default FiltersCategories
