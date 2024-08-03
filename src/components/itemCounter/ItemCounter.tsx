import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setCount, setItems } from "./itemCounterSlice";

export default function ItemCounter() {
  const { count } = useSelector((state: RootState) => state.itemCounter);
  const dispatch = useDispatch();

  function handleUnselect() {
    dispatch(setItems([]));
    dispatch(setCount(0));
  }

  if (count === 0) {
    return null;
  }

  return (
    <div className="item-coutner">
      <p>{count} selected item</p>
      <div className="item-coutner__buttons">
        <button onClick={handleUnselect}>Unselect all</button>
        <button>Download</button>
      </div>
    </div>
  );
}
