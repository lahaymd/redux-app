import {  GET_NAMES, UPDATE_NAME, UPDATE_PASSWORD, JWT, J, ADD_FILTER_TO_USER} from '../actions/types';

const initialState = {
    username: '',
    password: '',
    // users: [],
    filterData: []
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
        case UPDATE_PASSWORD:
            console.log('updating password');
            return {
                ...state,
                password: action.payload
            } 
        case JWT:
            console.log('json web token');
            return {
                ...state,
                filterData: action.payload.docs 
            } 
        case J:
            console.log('json web token');
            return {
                ...state,
                authorized: true
            } 
        
        case ADD_FILTER_TO_USER:
            console.log('add filter to user');
            return{
                ...state,
                filterData: action.payload.docs
            }
            


        default:
            return state;
    }
}