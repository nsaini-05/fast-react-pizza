import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant.js';
import MenuItem from './MenuItem.jsx';

function Menu() {
  const menu = useLoaderData();
  return (
    <div>
      <ul className="divide-y divide-stone-200 px-2">
        {menu.map((menuItem) => (
          <MenuItem pizza={menuItem} key={menuItem.id} />
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
