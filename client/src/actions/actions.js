import {  UPDATE_NAME, GET_NAMES, JWT, J } from './types';


export const getUsers = () => dispatch => {
    console.log('fetching RGB values');

    fetch('/user/name')
        .then(res => res.json())
        .then(data => {
            console.log('data:' + JSON.stringify(data));
            dispatch(
                {
                    type: GET_NAMES,
                    payload: data
                })
        })

}

export const changeAuth = () => dispatch => {
    dispatch({
        type: J,
        payload: null
    })
}

export const updateName = (name) => dispatch => {
    dispatch({
        type: UPDATE_NAME,
        payload: name
    })
}

export const getJWT = (data) => dispatch => {

   console.log('data from getjwt' + JSON.stringify(data));
   

    fetch('user/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(token => {
        sessionStorage.setItem('jwt', token.token)    

        dispatch({
            type: JWT,
            payload: token
        })
    })
}