import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/home'
import Cart from './pages/cart'
import History from './pages/history'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App