import { useState } from 'react';
import { isInCart, addToCart, removeFromCart } from '../utils/cart_utils';
import './AddToCartButton.css';

function AddToCartButton({ car }) {
  const [inCart, setInCart] = useState(() => isInCart(car.id));

  const handleClick = (e) => {
    e.stopPropagation();
    if (inCart) {
      removeFromCart(car.id);
      setInCart(false);
    } else {
      addToCart(car);
      setInCart(true);
    }
  };

  if (inCart) {
    return <span className="in-cart-badge"> Уже в корзине</span>;
  }

  return (
    <button className="add-to-cart-btn" onClick={handleClick}>
      В корзину
    </button>
  );
}

export default AddToCartButton;
