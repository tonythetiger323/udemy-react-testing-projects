/* eslint-disable import/no-anonymous-default-export */
import { actionTypes } from "../actions";

export default function(state=false, action) {
    switch(action.type){
        case (actionTypes.CORRECT_GUESS):
            return true;
        default:
            return state;    
    }
};