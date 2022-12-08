
const initialSate = {
  users: 20,
  loading: false,
  error: null, 
}

export const users  = (state = initialSate, action) => {
  switch (action.type) {
    case "GET_USER_REQUEST":
    return {...state, loading:true};
    case "GET_USER_SUCCESS":
      return{loading:false, users:action.payload};
      case "GET_USER_FAILURE":
      return{ loading:false, error:action.payload}
    default:
      return state;
    }
  }