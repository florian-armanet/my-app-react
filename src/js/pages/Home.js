import { NavLink } from 'react-router-dom'
import { PATH_PRODUCTS } from '../utils/constants'

const Home = () => {
    return (
        <div className="o-full relative flex-1 flex-flow-center">
            <div className="z-0 absolute inset-0">
                <img src="/app_react_home.jpg" alt="" className="w-full h-full object-cover"/>
            </div>
            <span className="z-1 absolute inset-0 bg-white/30"></span>
            <div className="z-2 relative max-w-md w-full px-4">
                <div className="flex-flow-center md-down:my-8 md:mb-16">
                    <NavLink to={ PATH_PRODUCTS }
                             className="Button Button--primary text-xl py-2 px-4 md:text-2xl md:py-4 md:px-8 rounded font-bold">
                        Voir les produits
                    </NavLink>
                </div>

                <ul className="o-grid text-primary-base">
                    <li className="o-col-12 md:o-col-4 md-down:mb-4">
                        <div className="bg-white rounded p-6 flex flex-col items-center">
                            <i className="Icon-react text-3xl mb-2"></i>
                            <p className="text-center">Ce site est développé avec React</p>
                        </div>
                    </li>
                    <li className="o-col-12 md:o-col-4 md-down:mb-4">
                        <div className="bg-white rounded p-6 flex flex-col items-center">
                            <i className="Icon-lab text-3xl mb-2"></i>
                            <p className="text-center">
                                Ce site est une démo afin d'illustrer mon savoir-faire en React. Il est donc impossible
                                d'acheter un produit.
                            </p>
                        </div>
                    </li>
                    <li className="o-col-12 md:o-col-4 md-down:mb-4">
                        <div className="bg-white rounded p-6 flex flex-col items-center">
                            <i className="Icon-store text-3xl mb-2"></i>
                            <p className="text-center">
                                <span className="mr-1">Ce site récupère uniquement des données fake avec l'API</span>
                                <a href="https://fakestoreapi.com/" target="_blank"
                                className="has-underline has-underline--invert">
                                    Fake Store API
                                </a>
                            </p>
                        </div>

                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Home
