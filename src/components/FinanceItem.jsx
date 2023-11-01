import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";

const FinanceItem = () => {
  const expenses = useSelector((state) => state.expenses);
  const incomes = useSelector((state) => state.incomes);
  return (
    <div>

        <MonetizationOnIcon />
        <div>
            
        </div>

    </div>
  );
};
export default FinanceItem;
