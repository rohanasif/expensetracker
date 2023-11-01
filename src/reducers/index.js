import {
  ADD_EXPENSE,
  ADD_INCOME,
  REMOVE_EXPENSE,
  REMOVE_INCOME,
  UPDATE_BALANCE,
} from "../constants";

const initialState = {
  income: [],
  expense: [],
  balance: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return;
    case REMOVE_EXPENSE:
      return;
    case ADD_INCOME:
      return;
    case REMOVE_INCOME:
      return;
    case UPDATE_BALANCE:
      return;
  }
};

export default rootReducer;
