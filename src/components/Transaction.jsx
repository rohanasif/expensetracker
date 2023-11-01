import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";

const Transaction = () => {
  return (
    <div className="flex">
      <MonetizationOnIcon />
      <div className="flex flex-col">
        <p>{finance.type}</p>
      </div>
    </div>
  );
};
export default Transaction;
