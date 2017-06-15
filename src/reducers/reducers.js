import {SET_SEARCH_TERM } from '../constants/constants';

const initialState ={
    searchTerm: ''
};


export const searchReducer = (state = initialState, action ={}) =>{
    switch (action.type){
        case SET_SEARCH_TERM:
            return Object.assign({},state,{searchTerm : action.payload});
        default:
            return state;
    }

};

