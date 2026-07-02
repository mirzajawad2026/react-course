import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [notes, setNotes] = useState([]);

  function submit(e) {
    e.preventDefault();

    const newNote = {
      title: title,
      details: details,
    };

    setNotes([...notes, newNote]);

    setTitle(""); 
    setDetails("");
  }

  function deleteNote(index) {
    const updatedNotes = notes.filter((note, i) => i !== index);
    setNotes(updatedNotes);
  }

  return (
    <div className="parent">
      <h1>Notes App</h1>

      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Enter Details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          required
        />

        <button type="submit">Make Note</button>
      </form>

      <div className="notes-container">
        {notes.length === 0 ? (
          <h2>No Notes Yet!</h2>
        ) : (
          notes.map((note, index) => (
            <div className="note-card" key={index}>
              <h3>{note.title}</h3>

              <p>{note.details}</p>

              <button
                className="delete-btn"
                onClick={() => deleteNote(index)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App