import { formatCurrency } from '../../utilities/helpers.js';
import DeleteItem from './DeleteItem.jsx';
import UpdateItemQuantity from './updateItemQuantity.jsx';
import { useSelector } from 'react-redux';
import { isItemPresentInCart } from '../cart/cartSlice.js';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const quantityThisPizzaPresent = useSelector(isItemPresentInCart(pizzaId));

  return (
    <li className="justify-between py-3 sm:flex sm:items-center">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="font-semibold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={quantityThisPizzaPresent}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
