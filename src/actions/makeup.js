const API_URL = process.env.REACT_APP_API_URL;

//Action Creators

const setMakeup = makeup => {
  return {
    type: 'GET_MAKEUP_SUCCESS',
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
