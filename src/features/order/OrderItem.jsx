import { formatCurrency } from '../../utilities/helpers.js';
function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm uppercase italic text-stone-500">
        {isLoadingIngredients ? 'Loading...' : ingredients?.join(', ')}
      </p>
    </li>
  );
}

export default OrderItem;
