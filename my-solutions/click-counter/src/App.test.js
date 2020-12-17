import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

/**
 * Function to create a ShallowWrapper for the App component
 * @function setup
 * @param {object} props - component props
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {return shallow(<App {...props}/>)};


/**
 * 
 * @param {ShallowWrapper} wrapper 
 * @param {string} val 
 */
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

describe("<App/> Component", () => {
  
  it("renders without error",  () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, "component-app");
    expect(appComponent.length).toBe(1);
  });

  it("renders a counter display", () => {
    const wrapper = setup();
    const counterDisplay = findByTestAttr(wrapper, "counter-display");
    expect(counterDisplay.length).toBe(1);
  });

  it("starts the counter at 0", () => {
    const wrapper = setup();
    const count = findByTestAttr(wrapper, "count").text();
    expect(count).toBe("0");
  });

  describe("more button", () => {
    
    it("renders a more button", () => {
      const wrapper = setup();
      const button = findByTestAttr(wrapper, "more-button");
      expect(button.length).toBe(1);
    });

    it("clicking on more button increments counter", () => {
      const wrapper = setup();
      // find button
      const button = findByTestAttr(wrapper, "more-button");
      // click button
      button.simulate("click");
      // find the display and test that number matches
      const count = findByTestAttr(wrapper, "count").text();
      expect(count).toBe("1");
    });
  });

  describe("less button", () => {
    
    it("renders a less button", () => {
      const wrapper = setup();
      const button = findByTestAttr(wrapper, "less-button");
      expect(button.length).toBe(1)
    });
    
    it("only decrements counter when counter is greater than 0", () => {
      const wrapper = setup();

      // make counter greater than 0
      // find more button
      const moreButton = findByTestAttr(wrapper, "more-button");
      // click button
      moreButton.simulate("click");
      // find less button
      const lessButton = findByTestAttr(wrapper, "less-button");
      // click button
      lessButton.simulate("click");
      // find display and test number matches
      const count = findByTestAttr(wrapper, "count").text();
      expect(count).toBe("0");

    });
  });

  describe("displays error if counter tries to go below 0", () => {

    it("error does not show when not needed", () => {

      const wrapper = setup();
      const errorDiv = findByTestAttr(wrapper, "error");
      const errorHiddenClass = errorDiv.hasClass("hidden");
      expect(errorHiddenClass).toBe(true);
    });

    describe("counter is 0 and less is clicked", () => {
      
      let wrapper;
      beforeEach(() => {
      wrapper = setup();

      // find the button and click
      const button = findByTestAttr(wrapper, "less-button");
      // click the button
      button.simulate("click");
      });
      
      it("shows an error", () => {
        const errorDiv = findByTestAttr(wrapper, "error");
        const errorHiddenClass = errorDiv.hasClass("hidden");
        expect(errorHiddenClass).toBe(false);
      });

      test("counter still displays 0", () => {
        const count = findByTestAttr(wrapper, "count").text();
        expect(count).toBe("0");
      });

      it("clears the error when more is clicked", () => {
        const button = findByTestAttr(wrapper, "more-button");
        button.simulate("click");
        const errorDiv = findByTestAttr(wrapper, "error");
        const errorHiddenClass = errorDiv.hasClass("hidden");
        expect(errorHiddenClass).toBe(true);
      });
  });
    });
    
});










// test("clicking on less button decrements counter",  () => {
//   const wrapper = setup()

//   // find button
//   const button = findByTestAttr(wrapper, "less-button");
//   // click button
//   button.simulate("click");
//   // find the display and test that number mathches
//   const count = findByTestAttr(wrapper, "count").text();
//   expect(count).toBe("-1");
// })
