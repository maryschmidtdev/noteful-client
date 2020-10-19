import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircleButton from "../CircleButton/CircleButton";
import { countNotesForFolder } from "../notes-helpers";
import "./FolderList.css";

class FolderList extends React.Component {
  render() {
    return (
      <div className="FoldersContainer">
        <ul className="FolderList">
          {this.props.folders.map((folder) => (
            <li key={folder.id}>
              <NavLink
                className="FolderList__folder-link"
                to={`/folder/${folder.id}`}
              >
                <span className="FolderList__num-notes">
                  {countNotesForFolder(this.props.notes, folder.id)}
                </span>
                {folder.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="FolderList__button-wrapper">
          <CircleButton
            tag={Link}
            to="/add-folder"
            type="button"
            className="FolderList__add-folder-button"
          >
            <FontAwesomeIcon icon="plus" />
            <br />
            Folder
          </CircleButton>
        </div>
      </div>
    );
  }
}
export default FolderList;
