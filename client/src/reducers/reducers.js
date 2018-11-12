import {  GET_NAMES, UPDATE_NAME, JWT, J} from '../actions/types';

const initialState = {
    username: 'Mike',
    password: '',
    users: []
}

export default function (state = initialState, action) {
    switch (action.type) {

        case GET_NAMES:
            console.log('users array' + action.payload);
                return {
                    ...state,
                    users: action.payload
                }
            
      
        case UPDATE_NAME:
            console.log('updating name');
            return {
                ...state,
                username: action.payload
            } 
        case JWT:
            console.log('json web token');
            return {
                ...state,
                jwt: action.payload
            } 
        case J:
            console.log('json web token');
            return {
                ...state,
                authorized: true
            } 
        


        default:
            return state;
    }
}