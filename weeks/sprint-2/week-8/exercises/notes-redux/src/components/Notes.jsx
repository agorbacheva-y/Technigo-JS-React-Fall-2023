import { useDispatch } from "react-redux";
import { useState } from "react";
import { addNote, removeNote } from "../reducers/noteSlice";

const Notes = () => {
  const dispatch = useDispatch();
  const [ noteInput, setNoteInput ] = useState("");

  const handleClick = (note) => {
    dispatch(addNote(note))
  }

  return (
    <div>
      <form>
        <input name="note" placeholder="Enter text here" value={noteInput} onChange={(e) => setNoteInput(e.target.value)} />
        <button onClick={() => handleClick(noteInput)}>Add note</button>
      </form>
    </div>
  );
};

export default Notes;