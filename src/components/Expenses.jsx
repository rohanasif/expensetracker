import { useSelector } from "react-redux";
const Expenses = () => {
  const expenses = useSelector((state) => state.expenses);
  return (
    <div>
      <h1>Expenses</h1>
      <p>
        Rs. {expenses.reduce((total, expense) => total + expense.quantity, 0)}
      </p>
    </div>
  );
};
export default Expenses;
