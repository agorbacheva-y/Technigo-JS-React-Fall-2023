import { useDispatch } from "react-redux";
import { addItem } from "../reducers/cartSlice";

const ProductList = () => {
  const dispatch = useDispatch();

  const products = [
    {
      id: 1,
      name: "Apple"
    },
    {
      id: 2,
      name: "Banana"
    },
    {
      id: 3,
      name: "Cherry"
    },
  ];

  const handleClick = (product) => {
    dispatch(addItem(product));
  }

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(({id, name}) => (
          <li key={id}>
            {name}
            <button onClick={() => handleClick(name)}>Add to cart</button>
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default ProductList;