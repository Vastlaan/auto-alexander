import React from "react";

export const initialState = {
    test: false,
};

export function reducer(state, action) {
    switch (action.type) {
        case "setTest":
            return { ...state, test: action.payload };
        default:
            return { ...state };
    }
}

export const Context = React.createContext();
