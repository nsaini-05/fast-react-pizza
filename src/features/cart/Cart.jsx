import { Link } from 'react-router-dom';
import LinkButton from '../../utilities/LinkButton.jsx';
import Button from '../../ui/Button.jsx';
import CartItem from './CartItem.jsx';
import { useSelector } from 'react-redux';
import { cartSelector, clearCart } from './cartSlice.js';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import EmptyCart from './EmptyCart.jsx';
function Cart() {
  const { userName } = useSelector((store) => store.user);
  const { cartItems } = useSelector(cartSelector);
  const dispatch = useDispatch();

  const cart = cartItems;

  const onClearCart = useCallback(() => {
    dispatch(clearCart());
  }, [dispatch]);

  if (!cartItems.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {userName} </h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((cartItem) => {
          return <CartItem item={cartItem} key={cartItem.pizzaId} />;
        })}
      </ul>
      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={onClearCart}>
          Clear Cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
