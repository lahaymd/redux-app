import { JWT, J } from '../actions/types';

const initialState = {
    jwt: '',
    authorized: false
};

export default function(state=initialState, action) {
    switch(action.type) {
        case JWT: 
        console.log(action.payload);
        
            return {
                ...state,
                jwt: action.payload,
                authorized: true
            }

        case J:
            return {
                ...state,
                authorized: state.authorized === true ? false: true
            }
        default:
            return state;
        
    }
}
