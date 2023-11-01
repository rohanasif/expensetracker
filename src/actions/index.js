import { TRANSACT, DELETE_TRANSACT } from "../constants";

export const transact = (transaction) => {
  return {
    type: TRANSACT,
    payload: transaction,
  };
};

export const deleteTransact = (transaction) => {
  return {
    type: DELETE_TRANSACT,
    payload: transaction,
  };
};
