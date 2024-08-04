import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setCount, setItems } from './itemCounterSlice';
import { convertToCSV, downloadCSV } from '../../utils/csvConverterAndDownload';

export default function ItemCounter() {
  const { items, count } = useSelector((state: RootState) => state.itemCounter);
  const dispatch = useDispatch();

  function handleUnselect() {
    dispatch(setItems([]));
    dispatch(setCount(0));
  }

  function handleDownload() {
    const csv = convertToCSV(items);
    downloadCSV(csv);
  }

  if (count === 0) {
    return null;
  }

  return (
    <div className="item-coutner">
      <p>{count} selected item</p>
      <div className="item-coutner__buttons">
        <button onClick={handleUnselect}>Unselect all</button>
        <button onClick={handleDownload}>Download</button>
      </div>
    </div>
  );
}
