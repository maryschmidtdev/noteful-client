import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Folders from "../Folders/Folders";
import NoteNav from "../NoteNav/NoteNav";
import NoteList from "../NoteList/NoteList";
import FolderList from "../FolderList/FolderList";
import dummyStore from "../dummy-store";
import { getNotesForFolder, findNote, findFolder } from "../notes-helpers";
import "./App.css";
import AddFolder from "../AddFolder/AddFolder";
import AddNote from "../AddNote/AddNote";
import AddErrorBoundry from "../AddErrorBoundry/AddErrorBoundry";

class App extends Component {
  state = {
    notes: [],
    folders: [],
  };

  componentDidMount() {
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
              <Folders folders={folders} notes={notes} {...routeProps} />
            )}
          />
        ))}
        <Route
          path="/note/:noteId"
          render={(routeProps) => {
            const { noteId } = routeProps.match.params;
            const note = findNote(notes, noteId) || {};
            const folder = findFolder(folders, note.folderId);
            return <NoteNav {...routeProps} folder={folder} />;
          }}
        />
        <Route path="/add-folder" component={NoteNav} />
        <Route path="/add-note" component={NoteNav} />
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
        <Route
          path="/note/:noteId"
          render={(routeProps) => {
            const { noteId } = routeProps.match.params;
            const note = findNote(notes, noteId);
            return <FolderList {...routeProps} note={note} />;
          }}
        />
        <AddErrorBoundry>
          <Route path="/add-folder" component={AddFolder} />
          <Route
            path="/add-note"
            render={(routeProps) => {
              return <AddNote {...routeProps} folders={folders} />;
            }}
          />
        </AddErrorBoundry>
      </>
    );
  }

  render() {
    return (
      <div className="App">
        <nav className="App__nav">{this.renderNavRoutes()}</nav>
        <header className="App__header">
          <h1>
            <Link to="/">Noteful</Link>
          </h1>
        </header>
        <main className="App__main">{this.renderMainRoutes()}</main>
      </div>
    );
  }
}

export default App;
