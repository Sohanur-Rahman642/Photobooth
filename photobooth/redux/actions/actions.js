import {UNSPLASH_ACCESS_KEY} from '../constanst/Constants'
import { getImagesFromApiTask } from '../actions/index'


export const getImagesTask = (params) => (dispatch) =>{
    console.log("params ", params)
    
    dispatch({
        type: API_REQUEST,
        payload: {
            apiKey: UNSPLASH_ACCESS_KEY,
            page: params.page,
        }
    })

    getImagesFromApiTask(UNSPLASH_ACCESS_KEY, params.page)
 
} 
