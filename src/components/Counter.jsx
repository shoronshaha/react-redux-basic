import { connect } from "react-redux";

import Count from "./Count";
import { decrement, increment } from "../redux/counter/actions";

function Counter({ count, increment, decrement }) {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <Count count={count}></Count>
      <div className="flex space-x-3">
        <button onClick={increment}> increment</button>
        <button onClick={decrement}> decrement</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    count: state.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
