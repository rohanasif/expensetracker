import { TRANSACT, DELETE_TRANSACT } from "../constants";

const initialState = {
  transactions: [],
  balance: { amount: 0 },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRANSACT:
      return action.payload.type === "expense"
        ? {
            ...state,
            transactions: [...state.transactions, action.payload],
            balance: {
              ...state.balance,
              amount: state.balance.amount - Number(action.payload.amount),
            },
          }
        : action.payload.type === "income"
        ? {
            ...state,
            transactions: [...state.transactions, action.payload],
            balance: {
              ...state.balance,
              amount: state.balance.amount + Number(action.payload.amount),
            },
          }
        : state;
    case DELETE_TRANSACT:
      return action.payload.type === "expense"
        ? {
            ...state,
            transactions: [
              ...state.transactions.filter((t) => t.id !== action.payload.id),
            ],
            balance: {
              ...state.balance,
              amount: state.balance.amount + action.payload.amount,
            },
          }
        : action.payload.type === "income"
        ? {
            ...state,
            transactions: [
              ...state.transactions.filter((t) => t.id !== action.payload.id),
            ],
            balance: {
              ...state.balance,
              amount: state.balance.amount - action.payload.amount,
            },
          }
        : state;
    default:
      return state;
  }
};

export default rootReducer;
