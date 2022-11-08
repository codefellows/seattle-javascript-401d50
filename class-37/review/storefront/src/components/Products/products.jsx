import { connect } from 'react-redux';

function Products(props) {
  console.log(props);
  return (
    <div>
      {props.products.filter(product =>
        product.category === props.activeCategory.normalized
      ).map(product => <p>{product.name}</p>)}
    </div>
  );
}



const mapStateToProps = (state) => ({
  products: state.products,
  activeCategory: state.activeCategory
});

export default connect(mapStateToProps)(Products);
