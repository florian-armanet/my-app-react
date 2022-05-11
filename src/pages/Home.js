import ListCategories from '../components/ListCategories'
import { CSSTransition, Transition } from 'react-transition-group'

const Home = () => {
    return (
        <>
            <CSSTransition in={true} classNames="example" timeout={300} unmountOnExit appear>
                <p className="text-center py-20 font-bold text-4xl">HOMEPAGE</p>
            </CSSTransition>
            <section>
                <ListCategories/>
            </section>
        </>
    )
}

export default Home
