import "./item.css";
function Item({ todotext, deleteitem }) {
  return (
    <div className="item">
      <div className="text"> {todotext}</div>
      <button className="btn-delete" onClick={deleteitem}>
        Delete
      </button>
    </div>
  );
}
export default Item;
