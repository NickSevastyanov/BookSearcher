import {  useSelector } from 'react-redux';
import './Categories.module.scss';
import { selectFilter } from '../../redux/filter/selectors';
import { useAppDispatch } from '../../redux/store';
import { setCategory } from '../../redux/filter/slice'


const Categories = () => {
  const categoryList = [
    'all',
    'art',
    'biography',
    'computers',
    'history',
    'medical',
    'poetry',
  ];

  const dispatch = useAppDispatch()
  const {category} = useSelector(selectFilter)

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = event.target.value;
    dispatch(setCategory(selectedCategory))
    
  }

  return (
    <div>
      <select onChange={handleCategoryChange} value={category} >
        {categoryList.map((name,index) => (
          <option key={index} value={name}>{name}</option>
        ))}
      </select>
    </div>
  );
};

export default Categories;
