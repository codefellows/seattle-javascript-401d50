import { useState } from "react";

const Username = (props) => {
  let [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateValue(input);
  };

  return (
    <div>
      <h2 data-testid="username-value">Current Value: {props.value}</h2>
      <form onSubmit={handleSubmit}>
        <input
          data-testid="username-form-input"
          onChange={(e) => setInput(e.target.value)}
        />
        <button data-testid="username-form-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Username;
