import { useState } from "react";
import Item from "./Item";

function ItemList({ todoitem, handledelete }) {
  const [sortOption, setSortOption] = useState("Original");
  const sortChangeHandler = (e) => {
    console.log(e.target.value);
    setSortOption(e.target.value);
  };
  const sortTodo = () => {
    if (sortOption === "Original") {
      return todoitem;
    }
    if (sortOption === "A-Z") {
      return [...todoitem].sort((a, b) => a.text.localeCompare(b.text));
    }
    if (sortOption === "Z-A") {
      return [...todoitem].sort((a, b) => b.text.localeCompare(a.text));
    }
  };
  const sortedToDo = sortTodo();
  return (
    <>
      <select onChange={sortChangeHandler} value={sortOption}>
        <option>A-Z</option>
        <option>Z-A</option>
        <option>Original</option>
      </select>
      {todoitem.length === 0 && <p>nothing plan yet</p>}
      {sortedToDo.length > 0 &&
        sortedToDo.map((todo) => {
          return (
            <Item
              todotext={todo.text}
              key={todo.id}
              deleteitem={() => {
                handledelete(todo.id);
              }}
            />
          );
        })}

      {/* {todoitem.map((todo) => {
        return <Item todotext={todo.text} key={todo.id} />;
      })} */}
      {/* <Item todotext={todoitem[0].text} /> 
      <Item todotext={todoitem[1].text} />
      <Item todotext={todoitem[2].text} />
      <Item todotext={todoitem[3].text} /> */}
    </>
  );
}

export default ItemList;
