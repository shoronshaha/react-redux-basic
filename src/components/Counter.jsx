import Button from "./Button";
import Count from "./Count";

export default function Counter({ id, count, increment, decrement }) {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <Count count={count}></Count>
      <div className="flex space-x-3">
        <Button label="Increment" handler={() => increment(id)}>
          {" "}
        </Button>
        <Button label="Decrement" handler={() => decrement(id)}>
          {" "}
        </Button>
      </div>
    </div>
  );
}
