import {  UPDATE_NAME, RGB_VALUES } from './types';


export const postRGB = (RGBValues) => dispatch => {
    console.log('fetching RGB values');

    fetch('/user', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ rgb: RGBValues })
    })
        .then(res => res.json())
        .then(data => {
            console.log('data:' + JSON.stringify(data));
            dispatch(
                {
                    type: RGB_VALUES,
                    payload: RGBValues
                })
        })

}

export const updateName = (name) => dispatch => {
    dispatch({
        type: UPDATE_NAME,
        payload: name
    })
}