import { TRANSACT, DELETE_TRANSACT } from "../constants";

export const transact = () => {
  return {
    type: TRANSACT,
  };
};

export const deleteTransact = () => {
  return {
    type: DELETE_TRANSACT,
  };
};
