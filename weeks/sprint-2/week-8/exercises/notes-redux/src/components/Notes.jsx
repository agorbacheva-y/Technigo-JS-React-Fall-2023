import { useDispatch } from "react-redux";
import { addNote, removeNote } from "../reducers/noteSlice";

const Notes = () => {
  const dispatch = useDispatch();

  const notes = [
    {
      id: 1,
      message: "Note 1"
    },
    {
      id: 2,
      message: "Note 2"
    },
    {
      id: 3,
      message: "Note 3"
    }
  ];

  return (
    <div>
      {notes.map(({id, message}) => (
        <div key={id}>
          {message}
          <button onClick={() => dispatch(addNote(message)) }>Add note</button>
          <button onClick={() => dispatch(removeNote(id)) }>Remove note</button>
        </div>
       
      ))}
    </div>
  );
};

export default Notes;