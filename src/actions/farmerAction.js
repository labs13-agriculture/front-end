import axios from 'axios';

    


export const FARMER_SEARCH_START = 'FARMER_SEARCH_START';
export const FARMER_SEARCH_SUCCESS = 'FARMER_SEARCH_SUCCESS';
export const FARMER_SEARCH_FAILURE = 'FARMER_SEARCH_FAILURE';

export const searchFarmers = query => dispatch =>{
    

    const nameSearch = encodeURI(query.name);
    const locationSearch = encodeURI(query.location);
    dispatch({type: FARMER_SEARCH_START, payload: {name: nameSearch, location: locationSearch}});
    //console.log(nameSearch + " " + locationSearch);

    const urlString = `https://tieme-ndo-backend.herokuapp.com/farmers/search?name=${nameSearch}&location=${locationSearch}&lead=${query.leads}`
    console.log(urlString);

    return axios
        .get(urlString,{
            headers: {
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${window.localStorage.getItem('token')}`
            }
        })
        .then(res =>{
            console.log("OUTPUTTING RES")
            console.log(res.data);
            dispatch({type: FARMER_SEARCH_SUCCESS, payload: res.data})
        })
        .catch(err =>{
            console.log(err);
            dispatch({type: FARMER_SEARCH_FAILURE, payload: err})
        })
}

export const DELETE_FARMER_START = 'DELETE_FARMER_START';
export const DELETE_FARMER_SUCCESS = 'DELETE_FARMER_SUCCESS';
export const DELETE_FARMER_FAILURE = 'DELETE_FARMER_FAILURE';

export const deleteFarmer = (id) => dispatch => {
    dispatch({ type: DELETE_FARMER_START });
   
    
    return axios
      .delete(`https://tieme-ndo-backend.herokuapp.com/farmers/farmer/${id}`,{
        headers: {
          'Content-Type' : 'application/json',
          
          
          Authorization: `Bearer ${window.localStorage.getItem('token')}`
        }
      })
      .then(res => {
        console.log("DELETE_FARMER_data", res.data);
        
        dispatch({ type: DELETE_FARMER_SUCCESS, payload: res.data });
        
     
      }).catch(
        err => {console.log(err)
            dispatch({type:DELETE_FARMER_FAILURE,payload:err})
        }        
    );}

export const ADD_FARMER_START = 'ADD_FARMER_START';
export const ADD_FARMER_SUCCESS = 'ADD_FARMER_SUCCESS';
export const ADD_FARMER_FAILURE = 'ADD_FARMER_FAILURE';

export const addFarmer = newFarmer => dispatch =>{
    dispatch({ type: ADD_FARMER_START })
    console.log("attempting to add", newFarmer);

    return axios
        .post('https://tieme-ndo-backend.herokuapp.com/farmers/add', newFarmer, {
            headers: {
                'Content-Type' : 'application/json',
                
                
                Authorization: `Bearer ${window.localStorage.getItem('token')}`
              }
            })
            .then(res => {
              console.log("added new farmer", res.data);
              
              dispatch({ type: ADD_FARMER_SUCCESS, payload: res.data });
              
           
            }).catch(
              err => {console.log(err)
                  dispatch({type:ADD_FARMER_FAILURE,payload:err})
              }       
          );
        }
export const GET_FARMER_START = 'GET_FARMER_START';
export const GET_FARMER_SUCCESS = 'GET_FARMER_SUCCESS';
export const GET_FARMER_FAILURE = 'GET_FARMER_FAILURE';

export const getFarmer = farmerId => dispatch =>{
  dispatch({ type: GET_FARMER_START })
  console.log("starting get farmer action")

  return axios
      .get(`https://tieme-ndo-backend.herokuapp.com/farmers/farmer/${farmerId}`, {
          headers: {
              'Content-Type' : 'application/json',
              
              
              Authorization: `Bearer ${window.localStorage.getItem('token')}`
            }
          })
          .then(res => {
            console.log("get farmer demographics", res.data);
            
            dispatch({ type: GET_FARMER_SUCCESS, payload: res.data });
            
          
          }).catch(
            err => {console.log('get demographics failure',err)
                dispatch({type:GET_FARMER_FAILURE,payload:err})
            }       
        );
      }
          

