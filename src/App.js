import './App.scss'
import Products from '../src/components/Products'
import Searcher from './components/Searcher'
import Filters from './components/Filters'

function App () {
    return (
        <div className="App">
            <div className="max-w-container px-4 py-12 w-full mx-auto">
                <div className="flex flex-wrap justify-center mb-10">
                    <Searcher/>
                </div>
                <div className="flex flex-wrap items-start">
                    <Filters/>
                    <Products/>
                </div>
            </div>
        </div>
    )
}

export default App
