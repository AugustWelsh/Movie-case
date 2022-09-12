import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Beyond Bizarre Movies</h1>
          <Link to="/">Home</Link>
          <Link to="/about">Movies</Link>
          <Link to="/products">Snacks and Drinks</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/products/:id"  element={<ProductDetails/>} />
          <Route path="/products" element={<Products/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App