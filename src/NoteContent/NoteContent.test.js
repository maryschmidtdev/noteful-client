import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import NoteContent from "./NoteContent";

describe(`NoteContent component`, () => {
  const props = {
    note: {
      id: "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
      name: "Dogs",
      modified: "2019-01-03T00:00:00.000Z",
      // "folderId": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
      content: "Corporis accusamus placeat.\n \rUnde.",
    },
  };

  it("renders a .NoteContent by default", () => {
    const wrapper = shallow(<NoteContent />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders a Note with note prop", () => {
    const note = shallow(<NoteContent {...props} />).find("Note");
    expect(toJson(note)).toMatchSnapshot();
  });

  it(`splits the content by \\n or \\n\\r, with a p foreach`, () => {
    [
      {
        note: { content: "Content with n r.\n \rafter n r." },
      },
      {
        note: { content: "Content with n.\nafter." },
      },
    ].forEach((props) => {
      const content = shallow(<NoteContent {...props} />).find(
        "NoteContent__content"
      );
      expect(toJson(content)).toMatchSnapshot();
    });
  });
});
