import { JWT, J, CHECK_AUTH } from '../actions/types';

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
                jwt: action.payload.token,
                authorized: action.payload.auth
            }

        case J:
            return {
                ...state,
                authorized: state.authorized === true ? false: true
            }

        case CHECK_AUTH:
            return {
                ...state,
                jwt: action.payload.token || '',
                authorized: action.payload.auth
            }
        default:
            return state;
        
    }
}
