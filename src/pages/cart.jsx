import { useState } from 'react';
import { getCart, removeFromCart } from '../utils/cart_utils';
import { getFuelLabel, getTransmissionLabel } from '../constants/car.constants';
import './Cart.css';

function Cart() {
    const [cartItems, setCartItems] = useState(() => getCart());

    const handleRemove = (carId) => {
        removeFromCart(carId);
        setCartItems(getCart());
    };

    return (
        <div className="cart-page">
            <h1>Корзина</h1>
            {cartItems.length === 0 ? (
                <p className="cart-empty">Корзина пуста</p>
            ) : (
                <div className="cart-list">
                    {cartItems.map((car) => (
                        <div key={car.id} className="cart-item">
                            <div className="cart-item__info">
                                <h2>{car.brand} {car.model} ({car.year})</h2>
                                <p>Цена: {car.price.toLocaleString()} ₸</p>
                                <p>Топливо: {getFuelLabel(car.fuel)}</p>
                                <p>Коробка: {getTransmissionLabel(car.transmission)}</p>
                            </div>
                            <button
                                className="cart-item__remove"
                                onClick={() => handleRemove(car.id)}
                            >
                                Удалить
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Cart;