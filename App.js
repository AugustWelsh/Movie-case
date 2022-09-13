import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import SeatPick from './pages/SeatPick'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Beyond Bizarre Movies</h1>
          <Link to="/">Home</Link>
          <Link to="/products">Movies</Link>
          <Link to="/about">Contact</Link>
        
         
          
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/products/:id"  element={<ProductDetails/>} />
          <Route path="/products" element={<Products/>}/>
          <Route path="/seatpick" element={<SeatPick/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App