import { useSelector } from "react-redux";

const Income = () => {
  const incomes = useSelector((state) => state.incomes);

  return (
    <div className="bg-white flex flex-col items-center rounded-md p-4 min-h-[200px] ">
      <h1>Income</h1>
      <div>
        <p>
          Rs. {incomes?.reduce((total, income) => total + income.quantity, 0)}
        </p>
        {incomes.map((income, i) => {
          return (
            <div className="flex justify-around" key={i}>
              <p>
                {income.type}: Rs. {income.quantity}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Income;
