import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader.jsx";
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  // console.log(navigation);
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-gray-100">
      {isLoading && <Loader />}
      <Header className="" />
      <div className="overflow-scroll">
        <main className="max-w-3x mx-auto my-0">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
