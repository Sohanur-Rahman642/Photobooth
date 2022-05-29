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
        getPhotoes(UNSPLASH_ACCESS_KEY, params.page)
        .then(
            items => {
                if(items.length > 0){
                    let arr = [];
                    items.map(item => {
                        arr.push({
                            id: item.id,
                            imgUrl: item.urls.regular,
                            downloadUrl: item.links.download,
                        })
                    })

                    dispatch({
                     type: API_SUCCESS,
                     data: arr
                    })
                }else{
                 dispatch({
                     type: API_LIST_END,
                    })
                }
            }
        )
        .catch(
            error => {
                dispatch({
                    type: API_FAILURE,
                    error: error.message
                   })
            }
        );
 
     
     }catch(error){
         dispatch({
             type: API_FAILURE,
             error: error
            })
     }
} 


