import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <Link to="/" >Главная</Link>
      <Link to="/cart" >Корзина</Link>
      <Link to="/history" >История покупок</Link>
    </header>
  )
}

export default Header