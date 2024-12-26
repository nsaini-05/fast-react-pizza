import { useDispatch } from 'react-redux';
import Button from '../../ui/Button.jsx';
import { deleteItem } from './cartSlice.js';
function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteItem(pizzaId));
  };

  return (
    <div>
      <Button type="small" onClick={deleteHandler}>
        Delete
      </Button>
    </div>
  );
}

export default DeleteItem;
