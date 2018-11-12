import { combineReducers } from 'redux';
import reducer from './reducers';
import jwtreducer from './jwtreducer';

export default combineReducers({
    users: reducer,
    jwt: jwtreducer
})