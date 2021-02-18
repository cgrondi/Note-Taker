import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import Note from "./Note";
import React, { useState } from "react";

function App() {
  //create an array to store notes that will be displayed individually
  const [myNotes, setMyNotes] = useState([]);

  //function to add a note to myNotes. passed to <CreateArea> as a prop
  function addNote(note) {
    setMyNotes((prevValue) => {
      //spread operator allows us to add new note to existing array
      return [...prevValue, note];
    });
  }
  function deleteNote(id) {
    setMyNotes((prevValue) => {
      return myNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div id="page-container">
      <Header />
      <CreateArea AddNote={addNote} />
      <div id="note-container">
        {myNotes.map((note, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={note.title}
              note={note.note}
              deleteNote={deleteNote}
            />
          );
        })}
      </div>
      <div id="footer-container">
        <Footer id="footer" />
      </div>
    </div>
  );
}

export default App;
