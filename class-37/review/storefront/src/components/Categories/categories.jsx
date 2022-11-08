import { connect } from 'react-redux';
import List from '@mui/material/ListItem';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { chooseCategory } from '../../store/categories';


function Categories(props)
{
  return (
    <List>
      { props.categories.map((category, idx) => (
        <ListItem key={ idx }>
          <ListItemButton onClick={() => props.chooseCategory(category.display)}>{category.display}</ListItemButton>
        </ListItem>
      )) }
    </List>
  )
}

// consume store, so we can the 'state' in store as 'props
const mapStateToProps = (state) => ({
  categories: state.categories,
  activeCategory: state.activeCategory,
});
const mapDispatchToProps = {
  chooseCategory,
}
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
