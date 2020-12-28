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
            it("renders without error", () => {

            });

            it("renders input box",  () => {

            });

            it("renders submit button", () => {

            });
        });

        describe("word has been guessed", () => {
            t("renders without error", () => {

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