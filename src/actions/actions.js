import { 
    SET_SEARCH_TERM ,
    REQUEST_ROBOTS_ERROR,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_PENDING
} from '../constants/constants';
import apiCall from '../api/api'

// const myAction = {
//     type:'',
//     payload: {},
//     meta: {}
// }



export const setSearchTerm = (text) => ({
    type : SET_SEARCH_TERM,
    payload: text

});


export const requestsRobots = (dispatch) => {
    //dispatch a peending myAction
    //fire the API request, upon sucess fire a sucess myAction
    //on error we dispatch an error
    dispatch({ type: REQUEST_ROBOTS_PENDING});
    
     
    apiCall('https://jsonplaceholder.typicode.com/users')
    .then(response => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: response}))
    .then(error => dispatch({type: REQUEST_ROBOTS_ERROR, payload : error}))
    
    


}
