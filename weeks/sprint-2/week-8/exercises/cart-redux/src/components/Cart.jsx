import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../reducers/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  //console.log(cartItems);
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(removeItem(item));
  }

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => handleClick(item) }>Remove</button>
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
};

export default Cart;