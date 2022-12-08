import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import fetchUser from './NotFound '

const DummyApp = ({UserData, fetchUser}) => {
  const user = UserData.user;
  const loading = UserData.loading;
  const error = UserData.error

  useEffect(() => {
    fetchUser();
    //eslint-disable-next-line
  },[])
  return (
    <div>
    <div>Welcome back to class</div>
    {loading && <h1>Loadding...</h1>}
    {error && !loading && <h2>{error}</h2> }
    {user && user.map((use) => <h2 key={use.id}>{use.name}</h2>)}
  </div>
  )
}

const mapStateToProps = (state) => {
return {
  UserData: state.users
}
}
const dispatchStateToProps = (dispatch) => {
  return{
    fetchUser: () => dispatch(fetchUser)
  }
}
export default connect(mapStateToProps,dispatchStateToProps)(DummyApp);