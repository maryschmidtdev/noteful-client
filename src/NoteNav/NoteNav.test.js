import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import NoteNav from "./NoteNav";

describe(`NoteNav component`, () => {
  const props = {
    folder: {
      name: "Important",
    },
  };

  it("renders a .NoteNav by default", () => {
    const wrapper = shallow(<NoteNav />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders a h3 with folder name when in props", () => {
    const h3 = shallow(<NoteNav {...props} />).find(".NoteNav__folder-name");
    expect(toJson(h3)).toMatchSnapshot();
  });
});
