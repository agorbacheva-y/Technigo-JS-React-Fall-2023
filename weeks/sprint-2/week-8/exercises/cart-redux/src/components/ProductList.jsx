import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../reducers/cartSlice";

const ProductList = () => {
  // dispatch your addItem action in your ProducList component
  const dispatch = useDispatch();
  // create a list of products to display
  const products = [
    {
      id: 1,
      name: "apple",
    },
    {
      id: 2,
      name: "pear",
    },
    {
      id: 3,
      name: "banana",
    },
  ]; //Thanks for today!! Tough exercise to show when we were in the middle

  // thank you! i need to go through the codealong on my own i think hahah
  // i will leave this open if either of you want to play around on it

  //thanks! I have team session after, so I won't have time this afternoon, so for my sake you can close it
  // okie doks! Have a nice afternnon!

  // you too! =)

  const handleAddItem = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="prodList">
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <div key={product.id}>
            <li>{product.name}</li>
            <button onClick={() => handleAddItem(product)}>Add to cart</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
