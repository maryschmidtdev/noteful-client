import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "../NoteNav/node_modules/@fortawesome/react-fontawesome";
import Note from "../Note/Note";
import CircleButton from "../CircleButton/CircleButton";
import "./NoteList.css";

export default function NoteList(props) {
  return (
    <section className="NoteList">
      <ul>
        {props.notes.map((note) => (
          <li key={note.id}>
            <Note id={note.id} name={note.name} modified={note.modified} />
          </li>
        ))}
      </ul>
      <div className="NoteList__button-container">
        <CircleButton
          tag={Link}
          to="/add-note"
          type="button"
          className="NoteList__add-note-button"
        >
          <FontAwesomeIcon icon="plus" />
          <br />
          Note
        </CircleButton>
      </div>
    </section>
  );
}

NoteList.defaultProps = {
  notes: [],
};
