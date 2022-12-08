import React from 'react'
//import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

export const getUserRequest = () => {
  return {
    type: "GET_USER_REQUEST",
  };
}
export const getUserSuccess = (users) => {
  return {
    type: "GET_USER_SUCCESS",
    payload:users,
  };
};
export const getUserFailure = (error) => {
  return {
    type: "GET_USER_FAILURE",
    payload: error,
  };
};


const urlBase = "https://jsonplaceholder.typicode.com/users";
 const fetchUsers = () => {

   const fetchUser = () => {
     return (dispatch, getState) => {
       dispatch(getUserRequest());
       fetch(urlBase, {
         method: "GET",
       })
         .then((response) => response.json())
         .then((data) => {
           const users = data;
           dispatch(getUserSuccess(users));
         })
         .catch((err) => {
           const error = err.message;
           dispatch(getUserFailure(error));
         });
     };
    }
    console.log(fetchUser);
     return (
      <div>NotFound </div>
     )
   
 }
export default fetchUsers; 