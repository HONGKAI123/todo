import "./styles.css";
import TdList from "./components/TdList";
import WithToDo from "./components/HOC/WithToDo";

const ToDo = WithToDo(TdList);
export default function App() {
  return (
    <div className="App">
      <ToDo />
    </div>
  );
}
