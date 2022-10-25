import { useState } from "react";
import "./styles.css";
import ClickCounter from "./components/ClickCounter/ClickCounter";
import Username from "./components/Username/Username";

export default function App() {
  let [name, setName] = useState("Jacob");
  let [clicks, setClicks] = useState(0);

  function updateName(name) {
    if (typeof name !== "string") {
      console.error("Please give me a string!");
    } else {
      setName(name);
    }
  }

  function increment() {
    setClicks(clicks + 1);
  }

  function decrement() {
    setClicks(clicks - 1);
  }

  return (
    <div className="App">
      <Username value={name} updateValue={updateName} />
      <ClickCounter id="1" displayValue="-" handleClick={decrement} />
      {/* data-testid is something that react-testing-library uses to find elements rendered in the test environment*/}
      <p data-testid="click-display">Current Clicks {clicks}</p>
      <ClickCounter id="2" displayValue="+" handleClick={increment} />
    </div>
  );
}
