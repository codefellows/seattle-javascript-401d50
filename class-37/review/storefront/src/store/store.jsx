import {createStore} from 'redux';

import categoryReducer from './categories';

export default createStore(categoryReducer);
