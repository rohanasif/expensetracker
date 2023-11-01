import { useSelector } from "react-redux";
const Expenses = () => {
  const expenses = useSelector((state) => state.expenses);
  return (
    <div className="bg-white flex flex-col items-center rounded-md p-4 min-h-[200px] ">
      <h1>Expenses</h1>
      <p>
        Rs. {expenses.reduce((total, expense) => total + expense.quantity, 0)}
      </p>
      {expenses.map((expense, i) => {
        return (
          <div className="flex justify-around" key={i}>
            <p>
              {expense.type}: Rs. {expense.quantity}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default Expenses;
