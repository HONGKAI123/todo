import { useState } from "react";

const WithToDo = (WrappedComponent) => {
  const withCounter = (props) => {
    const [visible, setvisible] = useState(props.visible);
    const visibleHandler = () => {
      setvisible(true);
    };
    const invisibleHandler = () => {
      setvisible(false);
    };
    return (
      <div>
        <label htmlFor="visible" style={{ color: "white", fontSize: "30px" }}>
          Showtodo
        </label>
        <input
          name="visible"
          type="checkbox"
          onChange={visibleHandler}
          checked={visible}
          style={{
            width: "20px",
            height: "20px",
            marginRight: "5px",
            marginBottom: "10px",
          }}
        />
        <br />
        <label htmlFor="invisble" style={{ color: "white", fontSize: "30px" }}>
          dis
        </label>
        <input
          type="checkbox"
          name="invisble"
          onChange={invisibleHandler}
          checked={!visible}
          style={{
            display: "inline-block",
            width: "20px",
            height: "20px",
            margin: "0px 30px 10px 0px",
          }}
        />
        {visible ? <WrappedComponent {...props} /> : <p>Clock to show!!!</p>}
      </div>
    );
  };
  return withCounter;
};

export default WithToDo;
