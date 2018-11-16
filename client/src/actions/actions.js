import {  UPDATE_NAME, UPDATE_PASSWORD, GET_NAMES, JWT, J, CHECK_AUTH, ADD_FILTER_TO_USER } from './types';

export const checkAuth = () => dispatch => {
    console.log('checking auth');

    fetch('/user', {
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'x-access-token': sessionStorage.jwt
        },
        method: 'GET',


    })
        .then(res => res.json())
        .then(data => {
            console.log('jwt verify' + JSON.stringify(data));
            dispatch({
                type: CHECK_AUTH,
                payload: data
            })
            // this.setState({ auth: data.auth })
            // localStorage.setItem('jwt', data.token )
            if(data.auth == false) sessionStorage.setItem('jwt', '')
        }
        )
    
}

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

export const updatePassword = (password) => dispatch => {
    dispatch({
        type: UPDATE_PASSWORD,
        payload: password
    })
}

export const addFilterToUser = (user, filterData) => dispatch => {
    console.log('user ' + user);
    

    fetch(`user/filter/${user}`, {
        method: 'POST',
        headers: {  
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'

                 },
        body: JSON.stringify({filterData})
    })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: ADD_FILTER_TO_USER,
                payload: data
            })
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
        console.log(typeof token);
        console.log(token);

            dispatch({
                type: JWT,
                payload: token
            })
        
    })
}