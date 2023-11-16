import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../../cart-redux/src/reducers/cartSlice";

const NoteList = () => {
  const noteList = useSelector((state) => state.items);
  console.log(noteList);
  return (
    <div>
      <ul>
        {noteList.map((note) => (
          <li>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NoteList;
