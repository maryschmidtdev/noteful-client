import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FolderList from "../FolderList/FolderList";
import NoteContentSidebar from "../NoteContentSidebar/NoteContentSidebar";
import NoteList from "../NoteList/NoteList";
import NoteContent from "../NoteContent/NoteContent";
import dummyStore from "../dummy-store";
import { getNotesForFolder, findNote, findFolder } from "../notes-helpers";
import "./App.css";

class App extends Component {
  state = {
    notes: [],
    folders: [],
  };

  componentDidMount() {
    // fake date loading from API call
    setTimeout(() => this.setState(dummyStore), 600);
  }

  renderNavRoutes() {
    const { notes, folders } = this.state;
    return (
      <>
        {["/", "/folder/:folderId"].map((path) => (
          <Route
            exact
            key={path}
            path={path}
            render={(routeProps) => (
              <FolderList folders={folders} notes={notes} {...routeProps} />
            )}
          />
        ))}
        <Route
          path="/note/:noteId"
          render={(routeProps) => {
            const { noteId } = routeProps.match.params;
            const note = findNote(notes, noteId) || {};
            const folder = findFolder(folders, note.folderId);
            return <NoteContentSidebar {...routeProps} folder={folder} />;
          }}
        />
        <Route path="/add-folder" component={NoteContentSidebar} />
        <Route path="/add-note" component={NoteContentSidebar} />
      </>
    );
  }

  renderMainRoutes() {
    const { notes, folders } = this.state;

    return (
      <>
        {["/", "/folder/:folderId"].map((path) => (
          <Route
            exact
            key={path}
            path={path}
            render={(routeProps) => {
              const { folderId } = routeProps.match.params;
              const notesForFolder = getNotesForFolder(notes, folderId);
              return <NoteList {...routeProps} notes={notesForFolder} />;
            }}
          />
        ))}

        {notes.length ? (
          <Route
            path="/note/:noteId"
            render={(routeProps) => {
              const { noteId } = routeProps.match.params;

              const note = findNote(notes, noteId);

              return <NoteContent {...routeProps} note={note} />;
            }}
          />
        ) : null}
      </>
    );
  }

  render() {
    return (
      <div className="App">
        <nav className="App__nav">{this.renderNavRoutes()}</nav>
        <header className="App__header">
          <h1>
            <Link to="/">Noteful</Link> <FontAwesomeIcon icon="check-double" />
          </h1>
        </header>
        <main className="App__main">{this.renderMainRoutes()}</main>
      </div>
    );
  }
}

export default App;
