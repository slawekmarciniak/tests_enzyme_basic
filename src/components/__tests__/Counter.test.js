import React from "react";
import Counter from "../Counter";
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
  it("should have initial state 10 if props start equal 10", () => {
    const wrapper = shallow(<Counter start={"10"} />);
    const counter = wrapper.find(".counterDisplay");
    expect(counter.text()).toBe("10");
  });
  it("should have buttons with text + and -", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.containsMatchingElement(<button>-</button>)).toEqual(true);
    expect(wrapper.containsMatchingElement(<button>+</button>)).toEqual(true);
  });
  it("should modify state if click button + or -", () => {
    const wrapper = shallow(<Counter />);
    let counter = wrapper.find(".counterDisplay");
    expect(counter.text()).toBe("0");
    wrapper.find("button").at(0).simulate("click");
    counter = wrapper.find(".counterDisplay");
    expect(counter.text()).toBe("1");
    wrapper.find("button").at(1).simulate("click");
    counter = wrapper.find(".counterDisplay");
    expect(counter.text()).toBe("0");
    wrapper.find("button").at(1).simulate("click");
    counter = wrapper.find(".counterDisplay");
    expect(counter.text()).toBe("-1");
  });
  it("should change state if add number to input and click change button", () => {
    const wrapper = shallow(<Counter />);
    let input = wrapper.find("input").at(0);
    input.simulate("change", { target: { value: 100 } });
    input = wrapper.find("input").at(0);
    expect(input.props().value).toEqual(100);
    wrapper.find("button").at(2).simulate("click");
    let counter = wrapper.find(".counterDisplay");
    expect(counter.text()).toBe("100");
  });
  it("should button 'reset' set state to 0", () => {
    const wrapper = shallow(<Counter />);
    let counter = wrapper.find(".counterDisplay");
    expect(counter.text()).toBe("0");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    counter = wrapper.find(".counterDisplay");
    expect(counter.text()).toBe("3");
    const button = wrapper.find(".resetBtn");
    button.simulate("click");
    counter = wrapper.find(".counterDisplay");
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
