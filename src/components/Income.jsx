import { useSelector, useDispatch } from "react-redux";

const Income = () => {
  const incomes = useSelector((state) => state.incomes);
  const dispatch = useDispatch();
  return (
    <div className="bg-white">
      <h1>Income</h1>
      <p>Rs. {incomes.reduce((total, income) => total + income.quantity, 0)}</p>
      
    </div>
  );
};
export default Income;
