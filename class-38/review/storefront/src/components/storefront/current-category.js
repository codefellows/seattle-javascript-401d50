import { connect } from 'react-redux';
import { changeActiveCategory } from '../../store/categories';

function CurrentCategory(props) {
  let currentCategory = props.category.listCategories.filter(
    (el) => el.normalizedName === props.category.activeCategory
  )[0];

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{currentCategory.displayName}</h1>
      <p>{currentCategory.description}</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  category: state.categories,
});

export default connect(mapStateToProps)(CurrentCategory);
