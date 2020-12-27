import {correctGuess, actionTypes} from "../index";

describe("correctGuess",  () => {
    it("returns an action with a type `CORRECT_GUESS`", () => {
        const action = correctGuess();
        expect(action).toEqual({ type: actionTypes.CORRECT_GUESS});
    });
});