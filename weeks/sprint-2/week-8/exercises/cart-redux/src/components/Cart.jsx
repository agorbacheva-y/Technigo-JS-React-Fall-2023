import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
};

export default Cart;