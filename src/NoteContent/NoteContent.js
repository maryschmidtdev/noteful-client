import React from "react";
import Note from "../Note/Note";
import "./NoteContent.css";

class NoteContent extends React.Component {
  render() {
    return (
      <section className="NoteContent">
        <Note
          id={this.props.note.id}
          name={this.props.note.name}
          modified={this.props.note.modified}
        />
        <div className="NoteContent__content">
          {this.props.note.content.split(/\n \r|\n/).map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>
    );
  }
}

export default NoteContent;
