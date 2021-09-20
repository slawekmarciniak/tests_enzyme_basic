import React from "react";
import Counter from "./Counter";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

it("renders ok", () => {
  const tree = renderer.create(<Counter />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("Counter component", () => {
  it("should have initial state 0 if no props has been given", () => {
    const wrapper = shallow(<Counter />);
    const counter = wrapper.find(".counterDisplay");
    expect(counter.text()).toBe("0");
  });
});

// describe("Button component", () => {
//   it("should renders ok", () => {
//     const wrapper = shallow(<Button />);
//     const button = wrapper.find("button");
//     expect(button.text()).toBe("ok 0");
//   });
//   it("should button renders click me ok", () => {
//     const wrapper = shallow(<Button label={"click me"} />);
//     const button = wrapper.find("button");
//     expect(button.text()).toBe("click me 0");
//   });
//   it("should have counter set to 0", () => {
//     const wrapper = shallow(<Button />);
//     const button = wrapper.find("button");
//     let counter = wrapper.find("button span");
//     expect(counter.text()).toBe("0");
//     button.simulate("click");
//     counter = wrapper.find("button span");
//     expect(counter.text()).toBe("1");
//   });
// });
