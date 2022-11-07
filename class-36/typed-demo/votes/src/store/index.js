import { createStore } from 'redux';
import voteReducer from './votes.js'

export default createStore(voteReducer);
