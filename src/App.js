import logo from './logo.svg'
import './App.css'
import Products from '../src/components/Products'
import Searcher from './components/Searcher'
import Filters from './components/Filters'

function App () {
    return (
        <div className="App">
            <div className="max-w-container px-4 w-full mx-auto">
                <img src={ logo } className="App-logo" alt="logo"/>
                <div className="flex flex-wrap justify-between mb-4">
                    <Searcher/>
                    <Filters/>
                </div>
                <Products/>
            </div>
        </div>
    )
}

export default App
