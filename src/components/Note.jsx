import React from "react";

function Note(props) {
  function onDelete() {
    props.deleteNote(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.note}</p>
      <button onClick={onDelete}>
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
}

export default Note;
