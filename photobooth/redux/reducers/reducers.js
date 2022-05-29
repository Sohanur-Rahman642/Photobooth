import { combineReducers } from "redux";
import { API_REQUEST, API_SUCCESS, API_LIST_END, API_FAILURE, SET_PAGES } from "../actions/types";

const initialState = {
    loading: false,
    moreToLoad: false,
    error: null,
    moreError: null,
    data: [{
        id: '',
        imgUrl: '',
        downloadUrl: '',
    }],
    isListEnd: false,
}


const ImageReducers = (state = initialState, action) => {
   
    switch(action.type){
        case API_REQUEST:
            console.log("request ")
            if (action.payload.page === 1) {
                return { ...state, loading: true }
            } else {
                return { ...state, moreToLoad: true }
            }

        case API_SUCCESS: 
        console.log("success ")
 
            return {
                ...state,
                data: [...state.data, ...action.data],
                error: null,
                loading: false,
                moreToLoad: false
            }

        case API_FAILURE: 
        console.log("falilure ", action.error)

            return {
                ...state,
                error: action.error,
                loading: false,
                moreToLoad: false
            }

        case API_LIST_END: 
        console.log("list end ", action)

            return {
                ...state,
                isListEnd: true,
                loading: false,
                moreToLoad: false
            }
            
        default: return state;
    }
}


export const imageReducer = combineReducers({
    images: ImageReducers
})