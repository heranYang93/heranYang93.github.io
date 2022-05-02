import { useReducer } from "react";

import { TOGGLE_AND_UPDATE_MODAL } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_AND_UPDATE_MODAL:
      let newState = state;
      if (state.isModalOpen) {
        newState.isModalOpen = false;
      } else {
        newState.isModalOpen = true;
      }
      return newState;

    default:
      return state;
  }
};

export function useModalReducer(initialState) {
  return useReducer(reducer, initialState);
}
