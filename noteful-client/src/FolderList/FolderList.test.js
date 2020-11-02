import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import FolderList from "./FolderList";

describe(`FolderList component`, () => {
  const props = {
    note: {
      id: "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
      name: "Dogs",
      modified: "2019-01-03T00:00:00.000Z",
      // "folderId": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
      content: "Corporis accusamus placeat.\n \rUnde.",
    },
  };

  it("renders a .FolderList by default", () => {
    const wrapper = shallow(<FolderList />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders a Note with note prop", () => {
    const note = shallow(<FolderList {...props} />).find("Note");
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
      const content = shallow(<FolderList {...props} />).find(
        "FolderList__content"
      );
      expect(toJson(content)).toMatchSnapshot();
    });
  });
});
