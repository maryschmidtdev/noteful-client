import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import NoteContentSidebar from "./NoteContentSidebar";

describe(`NoteContentSidebar component`, () => {
  const props = {
    folder: {
      name: "Important",
    },
  };

  it("renders a .NoteContentSidebar by default", () => {
    const wrapper = shallow(<NoteContentSidebar />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders a h3 with folder name when in props", () => {
    const h3 = shallow(<NoteContentSidebar {...props} />).find(
      ".NoteContentSidebar__folder-name"
    );
    expect(toJson(h3)).toMatchSnapshot();
  });
});
