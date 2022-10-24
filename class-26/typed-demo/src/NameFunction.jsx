import { useState } from "react";

function Name(props) {
  const [state, setState] = useState({
    value: "Banana",
    name: "Not Jacob"
  });

  function changeName(value) {
    setState({
      value: state.value,
      name: value
    });
  }
  console.log(state);
  return (
    <h2 onClick={() => changeName("Jacob")}>
      {props.title}: {state.name}
    </h2>
  );
}

export default Name;
