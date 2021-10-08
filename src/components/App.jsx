import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";




function App() {


  const [notesArray, handleArray] = useState([]);

  function handleNote(newNotes) {
    handleArray(preValue => {
      return ([...preValue, newNotes])
    });
  }

  function deleteNoteFunction(id) {
    handleArray(preValue => {
      return (preValue.filter((noteItem, index) => {
        return index !== id;
      }))
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={handleNote} />
      {notesArray.map((notesArrayItem, index) => {
        return (<Note key={index} id={index} title={notesArrayItem.title} content={notesArrayItem.content} deleteNote={deleteNoteFunction} />)
      })}
      <Footer />
    </div>
  );
}

export default App;
