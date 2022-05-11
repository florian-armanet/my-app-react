import ListCategories from '../components/ListCategories'

const Home = () => {
    return (
        <>
            <p className="text-center py-20 font-bold text-4xl">HOMEPAGE</p>
            <section>
                <h2 className="mb-6 text-3xl text-primary-base font-bold">Nos catégories</h2>
                <ListCategories/>
            </section>
        </>
    )
}

export default Home
