import { useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/slise";

function Buttons() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default Buttons;