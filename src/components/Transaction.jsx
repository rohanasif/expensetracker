import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteTransact } from "../actions";

const Transaction = ({ transaction }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTransact({ transaction }));
  };
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <MonetizationOnIcon
          sx={
            transaction.type === "expense"
              ? { color: "red" }
              : transaction.type === "income"
              ? { color: "green" }
              : null
          }
        />
        <div className="flex flex-col">
          <p>{transaction.category}</p>
          <span>
            {transaction.amount} - {transaction.datetime.toString()}
          </span>
        </div>
      </div>
      <DeleteIcon onClick={() => handleDelete()} />
    </div>
  );
};
export default Transaction;
