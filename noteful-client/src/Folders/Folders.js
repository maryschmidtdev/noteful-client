import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "../NoteNav/node_modules/@fortawesome/react-fontawesome";
import CircleButton from "../CircleButton/CircleButton";
import { countNotesForFolder } from "../notes-helpers";
import "./Folders.css";

export default function Folders(props) {
  return (
    <div className="Folders">
      <ul className="Folders__list">
        {props.folders.map((folder) => (
          <li key={folder.id}>
            <NavLink
              className="Folders__folder-link"
              to={`/folder/${folder.id}`}
            >
              <span className="Folders__num-notes">
                {countNotesForFolder(props.notes, folder.id)}
              </span>
              {folder.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="Folders__button-wrapper">
        <CircleButton
          tag={Link}
          to="/add-folder"
          type="button"
          className="Folders__add-folder-button"
        >
          <FontAwesomeIcon icon="plus" />
          <br />
          Folder
        </CircleButton>
      </div>
    </div>
  );
}

Folders.defaultProps = {
  folders: [],
};
