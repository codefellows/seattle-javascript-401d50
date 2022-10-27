import { useEffect, useReducer } from "react";

const timerReducer = (state, action) => {
  console.log(action, state);
  switch (action.type) {
    case "decrement":
      // current state {time, isActive}
      // if i reduce time by 1, is it greater than 0
      let newTime = state.time - 1;
      return {
        time: newTime,
        isActive: Boolean(newTime)
      };
    case "reset":
      return {
        time: action.payload,
        isActive: true
      };
    default:
      return state;
  }
};

export default function Timer(props) {
  const [state, dispatch] = useReducer(timerReducer, {
    time: props.time,
    isActive: true
  });

  useEffect(() => {
    if (state.isActive) {
      setTimeout(
        () =>
          dispatch({
            type: "decrement"
          }),
        1000
      );
    }
  }, [state]);
  return (
    <div>
      <p>Time Remaining: {state.time}</p>
      <button
        onClick={() =>
          dispatch({
            type: "reset",
            payload: props.time
          })
        }
      >
        Reset
      </button>
    </div>
  );
}
