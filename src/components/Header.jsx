import { Link } from 'react-router-dom'

function Header() {
  return (
    <header style={{ background: '#333', padding: '12px 24px', display: 'flex', gap: '20px' }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Главная</Link>
      <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>Корзина</Link>
      <Link to="/history" style={{ color: 'white', textDecoration: 'none' }}>История покупок</Link>
    </header>
  )
}

export default Header