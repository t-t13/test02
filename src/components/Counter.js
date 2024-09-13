import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { countActions } from "../store/store";

const Counter = () => {
  const dispatcher = useDispatch();
  const counterPain = useSelector((state) => {
    return state.counterPain;
    // console.log(state);
  });

  const incrementHandle = () => {
    dispatcher(countActions.increment());
  };
  const increaseHandle = () => {
    dispatcher(countActions.increase({ amount: 10 }));
  };
  const decrementHandle = () => {
    dispatcher(countActions.decrement());
  };
  const toggleCounterHandler = () => {
    dispatcher(countActions.toggleChange());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {counterPain.showNumCount && (
        <div className={classes.value}> {counterPain.count}</div>
      )}
      <button onClick={incrementHandle}>increment</button>
      <button onClick={increaseHandle}>increase x</button>
      <button onClick={decrementHandle}>decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
