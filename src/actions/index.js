import {
  ADD_EXPENSE,
  ADD_INCOME,
  REMOVE_EXPENSE,
  REMOVE_INCOME,
  UPDATE_BALANCE,
} from "../constants";

export const addExpense = () => {
  return {
    type: ADD_EXPENSE,
  };
};

export const removeExpense = () => {
  return {
    type: REMOVE_EXPENSE,
  };
};

export const addIncome = () => {
  return {
    type: ADD_INCOME,
  };
};

export const removeIncome = () => {
  return {
    type: REMOVE_INCOME,
  };
};

export const updateBalance = () => {
  return {
    type: UPDATE_BALANCE,
  };
};
