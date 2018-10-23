import {  RED_CHANNEL_INPUT, GREEN_CHANNEL_INPUT, UPDATE_NAME} from '../actions/types';

const initialState = {
    username: 'Mike'
}

export default function (state = initialState, action) {
    switch (action.type) {
      
        case RED_CHANNEL_INPUT:
            console.log('red channel input');
            return {
                ...state,
                redStart: action.payload
            }
        case GREEN_CHANNEL_INPUT:
            console.log('green channel input');
            return {
                ...state,
                greenStart: action.payload
            }
        case UPDATE_NAME:
            console.log('updating name');
            return {
                ...state,
                username: action.payload
            } 
        


        default:
            return state;
    }
}