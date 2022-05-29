import { getPhotoes } from '../../services/ApiInterface';
import { API_SUCCESS, API_FAILURE, API_LIST_END } from './types';


export const getImagesFromApiTask =  (payload) => (dispatch) => {
    console.log('payload ', payload)
    try{
       getPhotoes(payload.apiKey, payload.page)
       .then(
           items => {
               if(items > 0){
                   dispatch({
                    type: API_SUCCESS,
                    data: items
                   })
               }else{
                dispatch({
                    type: API_LIST_END,
                   })
               }
           }
       );

    
    }catch(error){
        console.log("error ", error)
        dispatch({
            type: API_FAILURE,
            error: error.message
           })
    }
}