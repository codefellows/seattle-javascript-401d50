import SimpleCart from '../cart/simplecart';
import Categories from './categories';
import CurrentCategory from './current-category';
import Products from './products';

export default function StoreFront() {
  return (
    <>
      <div
        className='cart_category_container'
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Categories />
        <SimpleCart />
      </div>
      <CurrentCategory />
      <Products />
    </>
  );
}
