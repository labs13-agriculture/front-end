import axios from 'axios';

export const USER_SEARCH_START = 'USER_SEARCH_START';
export const USER_SEARCH_SUCCESS = 'USER_SEARCH_SUCCESS';
export const USER_SEARCH_FAILURE = 'USER_SEARCH_FAILURE';

export const userSearchResults = (searchQuery) => dispatch => {
    dispatch({type: USER_SEARCH_START});

    const nameSearch = encodeURI(searchQuery);
    console.log('name searched '+nameSearch)
    
    return axios
        .get(`http://localhost:4040/users/username/${nameSearch}`,{
            headers: {
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${window.localStorage.getItem('token')}`
            }
        })
        .then(res => {
            console.log(res);
            dispatch({type: USER_SEARCH_SUCCESS, payload: res.data});
        })
        .catch(err =>{
            console.log(err);
            dispatch({type: USER_SEARCH_FAILURE, payload: err})
        })
}