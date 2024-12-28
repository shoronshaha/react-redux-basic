import { useDispatch, useSelector } from "react-redux";
import Count from "./Count";
import { decrement, increment } from "../redux/counter/actions";

function HooksCounter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <Count count={count}></Count>
      <div className="flex space-x-3">
        <button onClick={incrementHandler}> increment</button>
        <button onClick={decrementHandler}> decrement</button>
      </div>
    </div>
  );
}
export default HooksCounter;
