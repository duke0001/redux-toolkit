import { useSelector } from "react-redux";

function List() {
  const count = useSelector((state) => state.counter.count);
  const textColor = true ? "black" : "white"; 

  return (
    <div>
      <h1 style={{ color: textColor }}>{count}</h1>
    </div>
  );
}

export default List;