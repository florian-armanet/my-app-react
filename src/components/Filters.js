import { useState } from 'react'

const Filters = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const clickOpenModal = (event) => setModalIsOpen(!modalIsOpen)

    return (
        <div className="z-1 relative bg-white px-4 py-2 outline-none box-shadow-inset-3">
            <p className="text-primary-base font-bold cursor-pointer" onClick={ clickOpenModal }>Filtres</p>
            <ul className={
                'absolute top-100 right-0 bg-white w-xs p-4 shadow-lg origin-top-left transition-fast divide-y-2 divide-primary-base font-bold ' + ( modalIsOpen ? 'block' : 'hidden' )
            }>
                <li className="pb-2">Categories</li>
                <li className="py-2">Price</li>
                <li className="pt-2">Rating</li>
            </ul>
        </div>
    )
}

export default Filters
