const CART_KEY = 'cart_items';

export const getCart = () => {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const isInCart = (carId) => {
  return getCart().some((item) => item.id === carId);
};

export const addToCart = (car) => {
  const cart = getCart();
  if (!isInCart(car.id)) {
    localStorage.setItem(CART_KEY, JSON.stringify([...cart, car]));
  }
};

export const removeFromCart = (carId) => {
  const cart = getCart().filter((item) => item.id !== carId);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const toggleCart = (car) => {
  if (isInCart(car.id)) {
    removeFromCart(car.id);
    return false;
  } else {
    addToCart(car);
    return true;
  }
};
