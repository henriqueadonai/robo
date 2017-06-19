import { 
    SET_SEARCH_TERM ,
    REQUEST_ROBOTS_ERROR,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_PENDING
} from '../constants/constants';

const searchinitialState ={
    searchTerm: ''
};


export const searchReducer = (state = searchinitialState, action ={}) =>{
    switch (action.type){
        case SET_SEARCH_TERM:
            return Object.assign({},state,{searchTerm : action.payload});
        default:
            return state;
    }

};

const robotsInitialState = { 
    robots:[], 
    isPending: false,
    error: undefined
}

export const robotReducer = (state = robotsInitialState, action = {}) => {
    switch(action.type){
        case REQUEST_ROBOTS_ERROR:
            return Object.assign({}, state, {error: action.payload, isPending : false});
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {robots: action.payload, isPending : false});
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, {isPending: true});
        default:
            return state;
    }
}