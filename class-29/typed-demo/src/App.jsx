import { useReducer, useState } from "react";
import "./styles.css";
import Timer from "./components/Timer/Timer";

const reducer = (state, action) => {
  if (action.type === "ADD_MESSAGE") {
    return {
      messages: [...state.messages, action.payload],
      users: [...state.users]
    };
  } else {
    return state;
  }
};

const initialState = {
  messages: [],
  users: []
};

export default function App() {
  let [username, setUsername] = useState("jacob");
  let [user, setUser] = useState({
    name: "Jacob",
    messages: [],
    channels: []
  });

  let [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);
  return (
    <div>
      <Timer time={5} />
      <ul>
        {state.messages.map((message) => (
          <li>{message}</li>
        ))}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "ADD_MESSAGE", payload: e.target.text.value });
        }}
      >
        <input name="text" type="text" />
        <button type="submit">Add Message</button>
      </form>
    </div>
  );
}
