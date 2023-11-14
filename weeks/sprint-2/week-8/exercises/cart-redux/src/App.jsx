import { Provider } from "react-redux";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import { store } from "./store";

export const App = () => {
  return (
    <Provider store={store} >
      <div>
        <Cart />
        <ProductList />
      </div>
    </Provider> 
  );
};