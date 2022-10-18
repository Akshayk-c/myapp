import React from 'react'
import { Link } from 'react-router-dom';


function profile() {
  const  token = sessionStorage.getItem('Token')
  return (
    <><div>
      Dashboard  {token}
      
    </div>
    <Link to={`/view`}>All user</Link><br></br>
    <Link to={`/New_user`} >Register User</Link>
    </>
  )
}

export default profile