import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../store/categories.js';

function Categories() {

  let categoriesData = useSelector(state => state.categories.data);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  console.log(categoriesData);
  return (
    <div>
      <h2>Categories Component</h2>
      <ul>
        {categoriesData.map(category => <li>{category.name}</li>)}
      </ul>
    </div>
  )
}

export default Categories;
