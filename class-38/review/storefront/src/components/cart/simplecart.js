import { useSelector } from 'react-redux';

function SimpleCart() {
  let cart = useSelector((state) => state.cart);
  console.log(cart);
  let cartList = cart.products.map((product, idx) => (
    <p key={idx}>{product.name}</p>
  ));
  return (
    <div style={{ backgroundColor: 'lightblue', width: '200px' }}>
      {cartList}
    </div>
  );
}

export default SimpleCart;
