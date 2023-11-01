import {
  GET_EXPENSES,
  ADD_EXPENSE,
  ADD_INCOME,
  GET_INCOMES,
  REMOVE_EXPENSE,
  REMOVE_INCOME,
  UPDATE_BALANCE,
} from "../constants";

export const getExpenses = () => {
  return {
    type: GET_EXPENSES,
  };
};

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

export const getIncomes = () => {
  return {
    type: GET_INCOMES,
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
