import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import  NavBar  from './NavBar';


function profile() {
  axios.defaults.headers.common = { 'Authorization': sessionStorage.getItem('Token') }
  const navigate = useNavigate()
  const [user, setUser] = useState('')
  const [admin, setAdmin] = useState('')
  useEffect(() => {
    try {
      var token = sessionStorage.getItem('Token')
      token = token.replace('Bearer', '');
      const decoded = jwt_decode(token);
      axios.get(`http://localhost:5000/user/profile/${decoded.id}`)
        .then(res => {
          setUser(res.data)
          setAdmin(res.data.admin)
        })
        .catch(err => {
          console.log(err)
        })
       
    }
    catch (error) {
      navigate('/')
    }
    

  }, [])

  
 

  return (
    <>
      <div>

      <NavBar props={[ admin , 'home']} />

        

      </div><div>
        <br></br>
        <label>
          {user.fname}
        </label><br></br>
        <label>
          {user.lname}
        </label><br></br>
        <label>
          {user.email}
        </label><br></br>
        <label>
          {user.password}
        </label><br></br>
      </div>


    </>
  )
}

export default profile