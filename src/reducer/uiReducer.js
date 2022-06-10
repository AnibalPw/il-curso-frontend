import { types } from "../types/types";

const initialState = {
    theme: null,
};

export const uiReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case types.toggleSwitch:
            return {
                ...state,
                theme: action.payload
            }

        default:
            return state;
    }
}
