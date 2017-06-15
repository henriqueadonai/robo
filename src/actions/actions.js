import { SET_SEARCH_TERM } from '../constants/constants'

// const myAction = {
//     type:'',
//     payload: {},
//     meta: {}
// }



export const setSearchTerm = (text) => ({
    type : SET_SEARCH_TERM,
    payload: text

});

