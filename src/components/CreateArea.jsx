import React, { useState } from "react";

function CreateArea(props) {

  const [note, setNote] = useState(
    {
      title: "",
      content: ""
    }
  );


  function handleChange(events) {

    // const [name, value] = events.target;
    const name = events.target.name;
    const value = events.target.value;


    setNote(preValue => {
      return (
        {
          ...preValue,
          [name]: value
        });
    });
  }


  function handleClick(events) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    events.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleClick}>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
