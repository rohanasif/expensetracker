import { TRANSACT, DELETE_TRANSACT } from "../constants";

export const transact = (transaction) => {
  if (
    transaction.type &&
    transaction.category &&
    transaction.amount >= 0 &&
    transaction.datetime
  ) {
    return {
      type: TRANSACT,
      payload: transaction,
    };
  } else {
    return {
      type: null,
      payload: null,
    };
  }
};

export const deleteTransact = (transaction) => {
  return {
    type: DELETE_TRANSACT,
    payload: transaction,
  };
};
