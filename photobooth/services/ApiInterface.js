import * as CONSTANTS from '../constants/Constant';

export async function getPhotoes(apiAccessKey, page) {
    const encodedApiAccessKey = encodeURIComponent(apiAccessKey)
    const encodedPage = encodeURIComponent(page)
    
    return fetch(CONSTANTS.BASE_URL + `photos/?client_id=${encodedApiAccessKey}&page=${encodedPage}`)
    .then( data => {
      if(data){
        return data.json();
      }
      throw new Error('Something went wrong');
    })
    .catch(error => {
      console.log(error)
      throw new Error('Network request failed')
    });
  }


  // export async function getPhotoesTest(apiAccessKey, page) {
  //   const encodedApiAccessKey = encodeURIComponent(apiAccessKey)
  //   const encodedPage = encodeURIComponent(page)
    
  //   return fetch(CONSTANTS.BASE_URL + `photos/?client_id=${encodedApiAccessKey}&page=${encodedPage}`)
  //   .then( data => data.json())
  //   .then( res => {
  //     if(Array.isArray(res) && res.length === 0){
  //       throw new Error('Nothing found from the server')
  //     }
  //     return res;
  //   })
  //   .catch(error => {
  //     console.log(error)
  //     throw new Error('Network request failed')
  //   });
  // }