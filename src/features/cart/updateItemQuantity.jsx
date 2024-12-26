import { useDispatch } from 'react-redux';
import Button from '../../ui/Button.jsx';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice.js';
function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    dispatch(increaseItemQuantity(pizzaId));
  };

  const decreaseQuantity = () => {
    dispatch(decreaseItemQuantity(pizzaId));
  };

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={decreaseQuantity}>
        -
      </Button>
      <span>{currentQuantity}</span>
      <Button type="round" onClick={increaseQuantity}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
