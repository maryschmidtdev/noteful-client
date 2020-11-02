import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircleButton from "../CircleButton/CircleButton";
import "./NoteNav.css";

export default function NoteNav(props) {
  return (
    <div className="NoteNav">
      <CircleButton
        tag="button"
        role="link"
        onClick={() => props.history.goBack()}
        className="NoteNav__back-button"
      >
        <FontAwesomeIcon icon="chevron-left" />
        <br />
        Back
      </CircleButton>
      {props.folder && (
        <h3 className="NoteNav__folder-name">{props.folder.name}</h3>
      )}
    </div>
  );
}

NoteNav.defaultProps = {
  history: {
    goBack: () => {},
  },
};
