// maybe we can do the counter in here. maybe i was wrong
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../reducers/cartSlice";

const Cart = () => {
  // dispatch your removeItem action in your ProducList component
  const dispatch = useDispatch();

  // so we need to get the updated store here i guess???
  const cartItems = useSelector((store) => store.cart.items);
  
  // is the store updated when we press a button? 

  // populate your cartItems object from the global state

  return (
    <div>
      <h2>Shopping Cart {cartItems}</h2>
      <ul>
        <ul>
          {/* create your cart items list mapping through `cartItems`` */}
        </ul>
      </ul>
    </div>
  );
};

export default Cart;
