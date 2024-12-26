import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button.jsx';
import { updateOrder } from '../../services/apiRestaurant.js';
function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priortiy</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  console.log(params);
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}

// 9W29PF
