import { useState } from "react";
import "./InputField.css";

function InputField({ savetodo }) {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(true);
  const inputChangeHandler = (e) => {
    // console.log(e.target.value);

    e.target.value.trim().length > 0 && setIsValid(true);

    setInput(e.target.value);
  };
  // console.log(typeof input);
  const sumbitHandler = (e) => {
    e.preventDefault();
    if (input.trim() === "" || !isNaN(input.charAt(0))) {
      setIsValid(false);
      return;
    }
    savetodo({
      text: input,
      id: Math.floor(Math.random() * 10000000)
    });
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={sumbitHandler}>
      {isValid ? (
        ""
      ) : (
        <p>please don't level blank or enter a number as first character</p>
      )}
      <input
        style={{
          borderColor: isValid ? "black" : "red",
          background: isValid ? "white" : "salmon"
        }}
        name="todo-form__input"
        value={input}
        onChange={inputChangeHandler}
      />
      <button className="todo-form__addbutton">Add Todo</button>
    </form>
  );
}
export default InputField;
