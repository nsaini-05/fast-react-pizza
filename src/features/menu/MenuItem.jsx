import Button from '../../ui/Button.jsx';
import { formatCurrency } from '../../utilities/helpers.js';
import { addItem, isItemPresentInCart } from '../cart/cartSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import DeleteItem from '../cart/DeleteItem.jsx';
import UpdateItemQuantity from '../cart/updateItemQuantity.jsx';
function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const quantityThisPizzaPresent = useSelector(isItemPresentInCart(id));
  const isInCart = quantityThisPizzaPresent > 0 ? true : false;
  const addToCart = () => {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  };

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {!soldOut && (
            <div className="flex gap-2">
              {!isInCart && (
                <div>
                  <Button type={'small'} onClick={addToCart}>
                    Add To Cart
                  </Button>
                </div>
              )}
              {isInCart && (
                <div className="flex items-center gap-4">
                  <UpdateItemQuantity
                    pizzaId={id}
                    currentQuantity={quantityThisPizzaPresent}
                  />
                  <DeleteItem pizzaId={id} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
