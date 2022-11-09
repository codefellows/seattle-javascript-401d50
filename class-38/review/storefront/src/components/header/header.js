import * as React from 'react';
import { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { connect, useSelector } from 'react-redux';

function Header(props) {
  // let cart = useSelector((state) => state.cart);
  // useEffect(() => {
  //   console.log('change');
  //   // cart = useSelector((state) => state.cart)
  // }, [cart]);
  console.log(props.cart);

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Store Front
        </Typography>
        <ShoppingCartIcon
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
        />
        {props.cart.total}
      </Toolbar>
    </AppBar>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Header);
