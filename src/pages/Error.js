import { NavLink } from 'react-router-dom'

function Error () {
    return (
        <>
            <p className="text-center py-20 font-bold text-4xl">Erreur</p>
            <div className="flex-flow-center">
                <NavLink to="/" className="text-center font-bold text-xl has-underline">Retour à la homepage</NavLink>
            </div>
        </>
    )
}

export default Error
