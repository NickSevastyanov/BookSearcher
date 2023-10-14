import { useSelector } from 'react-redux';

import { selectFilter } from '../../redux/filter/selectors';
import { useAppDispatch } from '../../redux/store';
import { setSort } from '../../redux/filter/slice';

const Sort: React.FC = () => {
  const sortList: string[] = ['relevance', 'newest'];

  const dispatch = useAppDispatch();
  const { sort } = useSelector(selectFilter);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSort = event.target.value;
    dispatch(setSort(selectedSort));
  };

  return (
    <div>
      <select onChange={handleSortChange} value={sort}>
        {sortList.map((name, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sort;
