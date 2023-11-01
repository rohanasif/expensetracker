import Expenses from "./components/Expenses";
import Add from "./components/Add";
import Income from "./components/Income";
const App = () => {
  return (
    <div className="main">
      <div className="flex justify-center items-center min-h-screen gap-5">
        <Income />
        <Add />
        <Expenses />
      </div>
    </div>
  );
};
export default App;
