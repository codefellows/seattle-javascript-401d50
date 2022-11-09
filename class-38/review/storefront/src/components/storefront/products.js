import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../store/cart';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

function Products(props) {
  let dispatch = useDispatch();
  let products = useSelector((state) => state.products);
  let listProducts = products.displayedProducts.map((el, idx) => {
    return (
      <Card key={idx} sx={{ maxWidth: 345 }}>
        <CardMedia
          component={'img'}
          alt={el.name}
          height={'140'}
          image={el.image}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component={'div'}>
            {el.name}
          </Typography>
          <Typography>{el.description}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => dispatch(addToCart(el))}>Add to Cart</Button>
          <Button>View Details</Button>
        </CardActions>
      </Card>
    );
  });
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Products</h1>
      <div style={{ display: 'flex' }}>{listProducts}</div>
    </>
  );
}

export default Products;
