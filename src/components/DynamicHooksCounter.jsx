import { useDispatch, useSelector } from "react-redux";
import Count from "./Count";
import { decrement, increment } from "../redux/dynamicCounter/actions";

function HooksCounter() {
  const count = useSelector((state) => state.dynamicCounter.value);
  const dispatch = useDispatch();

  const incrementHandler = (value) => {
    dispatch(increment(value));
  };
  const decrementHandler = (value) => {
    dispatch(decrement(value));
  };

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <Count count={count}></Count>
      <div className="flex space-x-3">
        <button onClick={() => incrementHandler(4)}> increment</button>
        <button onClick={() => decrementHandler(2)}> decrement</button>
      </div>
    </div>
  );
}
export default HooksCounter;
