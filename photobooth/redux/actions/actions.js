import {UNSPLASH_ACCESS_KEY} from '../../constants/Constant'
import { API_REQUEST, API_SUCCESS, API_FAILURE, API_LIST_END } from '../actions/types'
import { getPhotoes } from '../../services/ApiInterface';

export const getImagesTask = (params) => (dispatch) =>{
    console.log("params ", params)

    const payload = {
        apiKey: UNSPLASH_ACCESS_KEY,
        page: params.page,
    }
    
    dispatch({
        type: API_REQUEST,
        payload: {
            apiKey: UNSPLASH_ACCESS_KEY,
            page: params.page,
        }
    })

    try{
        getPhotoes(UNSPLASH_ACCESS_KEY, payload.page)
        .then(
            items => {
                //console.log("items ", items)
                if(items.length > 0){
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


