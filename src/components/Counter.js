import { useEffect, useState } from "react";
import "./styles.css";

const Counter = ({ start = 0 }) => {
  const [counter, setCounter] = useState(start);
  const [initialValue, setInitialValue] = useState("");

  useEffect(() => {
    setCounter(start);
  }, []);

  const handleAddNum = () => setCounter((prev) => prev + 1);
  const handleSubNum = () => setCounter((prev) => prev - 1);
  const handleChangeInitialValue = (e) => setInitialValue(e.target.value);
  const handleSetInitialValue = () => {
    if (initialValue) {
      setCounter(initialValue);
      setInitialValue("");
    }
  };
  const handleReset = () => {
    setCounter(start);
    setInitialValue("");
  };

  return (
    <div>
      <div className="buttonsContainer">
        <button onClick={handleAddNum}>+</button>
        <div className="counterDisplay">{counter}</div>
        <button onClick={handleSubNum}>-</button>
      </div>

      <input
        onChange={handleChangeInitialValue}
        id="someNumber"
        type="number"
        value={initialValue}
      />
      <label htmlFor="someNumber">
        <button onClick={handleSetInitialValue}>change</button>
      </label>

      <button onClick={handleReset} className="resetBtn">
        reset
      </button>
    </div>
  );
};

export default Counter;
