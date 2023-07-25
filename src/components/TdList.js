import React, { useState } from "react";
import InputField from "./InputField";
import ItemList from "./ItemList";

function TdList() {
  const [toDo, setToDo] = useState([]);
  const saveToDoHandler = (e) => {
    setToDo((prev) => {
      return [e, ...prev];
    });
  };
  const deleteHandler = (id) => {
    console.log(id);
    setToDo((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };
  console.log(toDo);
  const info = toDo.length === 0 && <h2>Don't Be Lazy!</h2>;
  return (
    <React.Fragment>
      <h1>ToDoList</h1>
      {info}
      {toDo.length > 0 && <h2>Time to work!!!</h2>}
      {toDo.length > 5 && <h2>So many works</h2>}
      <InputField savetodo={saveToDoHandler} />
      <ItemList todoitem={toDo} handledelete={deleteHandler} />
    </React.Fragment>
  );
}

export default TdList;
