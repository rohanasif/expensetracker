import { useSelector } from "react-redux";

const Income = () => {
  const transactions = useSelector((state) => state.transactions);
  const incomes = transactions.filter((t) => t.type === "income");

  return (
    <div className="bg-white flex flex-col items-center rounded-md p-4 min-h-[200px] ">
      <h1>Income</h1>
      <div>
        <p>
          Rs. {incomes?.reduce((total, income) => total + income.amount, 0)}
        </p>
        {incomes.map((income, i) => {
          return (
            <div className="flex justify-around" key={i}>
              <p>
                {income.type}: Rs. {income.amount}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Income;
