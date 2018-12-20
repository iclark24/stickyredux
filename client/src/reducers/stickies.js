import axios from "axios"

const STICKIES = "STICKIES"
const ADD_STICKIES = "ADD_STICKIES"
const UPDATE_STICKIES = "UPDATE_STICKIES"
const DELETE_STICKIES = "DELETE_STICKIES"

// REDUX ACTIONS

export const getStickies = () => {
  return (dispatch) => {
    axios.get('/api/stickies')
      .then( res => dispatch({ type: STICKIES, stickies: res.data }))
  }
}

export const addStickies = ( sticky ) => {
  return (dispatch) => {
    axios.post('/api/stickies', {sticky})
      .then( res => dispatch ({ type: ADD_STICKIES, sticky: res.data}))
  }
}

export const updateStickies = (sticky) => {
  return (dispatch) => {
    axios.put(`/api/stickies/${sticky.id}`, {sticky})
      .then(res=>dispatch({type:UPDATE_STICKIES, sticky: res.data }))
  }
}

export const deleteStickies = (id) => {
  return (dispatch) => {
    axios.delete(`/api/stickies/${id}`)
      .then(() => dispatch({type: DELETE_STICKIES, id}))
  }
}

// REDUX REDUCER

export default (state= [], action ) => {
  switch(action.type) {
    case STICKIES:
      return action.stickies
    case ADD_STICKIES:
      return [action.sticky, ...state]
    case UPDATE_STICKIES:
      return state.map( s => {
        if (s.id === action.sticky.id)
          return action.sticky
        return s
      })
    case DELETE_STICKIES:
      return state.filter( s => s.id !== action.id)
    default:
    return state
  }
}