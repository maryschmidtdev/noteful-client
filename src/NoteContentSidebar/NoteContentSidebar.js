import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircleButton from "../CircleButton/CircleButton";
import "./NoteContentSidebar.css";

class NoteContentSidebar extends React.Component {
  render() {
    return (
      <div className="NoteContentSidebar">
        <CircleButton
          tag="button"
          role="link"
          onClick={() => this.props.history.goBack()}
          className="NoteContentSidebar__back-button"
        >
          <FontAwesomeIcon icon="chevron-left" />
          <br />
          Back
        </CircleButton>
        {this.props.folder && (
          <h3 className="NoteContentSidebar__folder-name">
            {this.props.folder.name}
          </h3>
        )}
      </div>
    );
  }
}
export default NoteContentSidebar;
