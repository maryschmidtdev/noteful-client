import React from "react";
import Note from "../Note/Note";
import "./FolderList.css";

export default function FolderList(props) {
  return (
    <section className="FolderList">
      <Note
        id={props.note.id}
        name={props.note.name}
        modified={props.note.modified}
      />
      <div className="FolderList__content">
        {props.note.content.split(/\n \r|\n/).map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </section>
  );
}

FolderList.defaultProps = {
  note: {
    content: "",
  },
};
