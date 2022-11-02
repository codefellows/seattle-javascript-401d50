import { useContext } from 'react';
import { AuthContext } from './auth.js';
import { When } from 'react-if';

function IsAuthorized(props) {

  let context = useContext(AuthContext);
  let authorized = context.can(props.capability);
  console.log(context);

  return (
    <When condition={context.loggedIn && authorized}>
      {props.children}
    </When>
  )
}

export default IsAuthorized;
