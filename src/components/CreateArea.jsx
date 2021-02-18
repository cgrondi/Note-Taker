import React, { useState } from "react";

function CreateArea(props) {
  //holds value for the title and note being written in <input> and <textarea> respectivly
  const [note, setNote] = useState({
    title: "",
    note: ""
  });

  //updates note with value taken from the input
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevValue) => {
      return {
        //use spread operator to combine what we had in one field with what we now have in the active field
        ...prevValue,
        //name is put in brackets to that name is used as a variable and not literally as name
        [name]: value
      };
    });
  }

  return (
    <form>
      <input
        onChange={handleChange}
        name="title"
        placeholder="Title..."
        value={note.title}
      />
      <textarea
        onChange={handleChange}
        name="note"
        placeholder="Take a note..."
        rows="3"
        value={note.note}
      />
      <button
        onClick={(event) => {
          console.log("clicked");
          props.AddNote(note);
          setNote({
            title: "",
            note: ""
          });
          event.preventDefault();
        }}
      >
        Add
      </button>
    </form>
  );
}

export default CreateArea;
