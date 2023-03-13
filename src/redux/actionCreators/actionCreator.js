import { ADD_TO_CARD } from "../actionTypes/actionType";

export const addToCard = (product) => {
  return {
    type: ADD_TO_CARD,
    payload: product,
  };
};
