import { resetMakeupForm } from './makeupFormData'

const API_URL = process.env.REACT_APP_API_URL;

//Action Creators

const setMakeup = makeup => {
  return {
    type: 'GET_MAKEUP_SUCCESS',
    makeup
  }
}

const addMakeup = makeup => {
    return {
      type: "CREATE_MAKEUP_SUCCESS",
      makeup
    }
}


// Async actions
export const getMakeup = () => {
  return (dispatch) => {
    return fetch(`${API_URL}/makeup`)
    .then(response => response.json())
    .then(makeup => dispatch(setMakeup(makeup)))
    .catch(error => console.log(error))
  }
}

// export const getMakeupId= (id) => {
//   return (dispatch) => {
//     return fetch(`${API_URL}/makeup/`)
//     .then(response => response.json())
//     .then(makeupId => console.log(makeupId))
//     .catch(error => console.log(error))
//   }
// }

export const createMakeup = makeup => {
    return (dispatch) => {
      return fetch(`${API_URL}/makeup`, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(makeup)
      })
      .then(response => response.json())
      .then( makeup => { dispatch(addMakeup(makeup))
                       dispatch(resetMakeupForm())
                     })
      .catch( error => console.log(error))
    }
  }
