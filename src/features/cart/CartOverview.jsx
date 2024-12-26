import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTotalCartQuantity } from './cartSlice.js';
import { getTotalCartPrice } from './cartSlice.js';
import { formatCurrency } from '../../utilities/helpers.js';
function CartOverview() {
  const quantity = useSelector(getTotalCartQuantity);
  const totalPrice = formatCurrency(useSelector(getTotalCartPrice));
  if (!quantity) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 uppercase text-stone-200 sm:px-6">
      <p className="space-x-4 text-sm font-semibold text-stone-300 sm:space-x-6 md:text-base">
        {quantity > 0 && (
          <span>{`${quantity} ${quantity > 1 ? 'pizzas' : 'pizza'}`}</span>
        )}
        <span>{totalPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
