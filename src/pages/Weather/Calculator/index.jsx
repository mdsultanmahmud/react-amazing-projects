import { useState } from "react";
import "./_index.scss";
const CalculatorPage = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(value + e.target.innerHTML);
  };
  const handleAC = () => {
    setValue("");
  };
  const handleCalculation = () => {
    setValue(eval(value));
  };
  const handleDel = () => {
    setValue(value.toString().slice(0, -1));
  };

  return (
    <div className="calculator__wrapper">
      <div className="calculator__container">
        <input type="text" placeholder="0" value={value} readOnly />
        <div className="calculator__btn">
          <button onClick={handleAC}>AC</button>
          <button onClick={handleDel}>DEL</button>
          <button onClick={handleChange}>%</button>
          <button onClick={handleChange}>/</button>
          <button onClick={handleChange}>7</button>
          <button onClick={handleChange}>8</button>
          <button onClick={handleChange}>9</button>
          <button onClick={handleChange}>*</button>
          <button onClick={handleChange}>4</button>
          <button onClick={handleChange}>5</button>
          <button onClick={handleChange}>6</button>
          <button onClick={handleChange}>-</button>
          <button onClick={handleChange}>1</button>
          <button onClick={handleChange}>2</button>
          <button onClick={handleChange}>3</button>
          <button onClick={handleChange}>+</button>
          <button onClick={handleChange}>00</button>
          <button onClick={handleChange}>0</button>
          <button onClick={handleChange}>.</button>
          <button onClick={handleCalculation}> =</button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
