const ClickCounter = (props) => {
  return (
    <div>
      <button
        data-testid={`click-counter-${props.id}`}
        onClick={props.handleClick}
      >
        {props.displayValue}
      </button>
    </div>
  );
};

export default ClickCounter;
