import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "../../../test/testUtils";
import Input from "../Input";

const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store}/>).dive().dive();
     return wrapper;
};

describe("Input component", () => {
    describe("render", () => {
        describe("word has not been guessed", () => {
            let wrapper;
            beforeEach(() => {
                const initialState = { success: false};
                wrapper = setup(initialState);
            });
            it("renders without error", () => {
                const component = findByTestAttr(wrapper, "component-input");
                expect(component.length).toBe(1);
            });

            it("renders input box",  () => {
                const inputBox = findByTestAttr(wrapper, "input-box");
                expect(inputBox.length).toBe(1);
            });

            it("renders submit button", () => {
                const submit = findByTestAttr(wrapper, "submit-button");
                expect(submit.length).toBe(1);
            });
        });

        describe("word has been guessed", () => {
            it("renders without error", () => {

            });

            it("does not render input box",  () => {

            });

            it("does not render submit button", () => {

            });
        });
    });

    describe("update state", () => {

    });
});