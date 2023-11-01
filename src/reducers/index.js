import {
  GET_EXPENSES,
  ADD_EXPENSE,
  ADD_INCOME,
  GET_INCOMES,
  REMOVE_EXPENSE,
  REMOVE_INCOME,
  UPDATE_BALANCE,
} from "../constants";

const initialState = {
  incomes: [],
  expenses: [],
  balance: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPENSES:
      return {
        ...state,
      };
    case ADD_EXPENSE:
      return;
    case REMOVE_EXPENSE:
      return;
    case GET_INCOMES:
      return {
        incomes: action.payload,
      };
    case ADD_INCOME:
      return;
    case REMOVE_INCOME:
      return;
    case UPDATE_BALANCE:
      return;
    default:
      return state;
  }
};

export default rootReducer;
