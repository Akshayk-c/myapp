import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode'
import axios from 'axios'


function profile() {
  axios.defaults.headers.common = { 'Authorization': sessionStorage.getItem('Token') }
  const navigate = useNavigate();
  const [user, setUser] = useState('')
  useEffect(() => {
    try {
      var token = sessionStorage.getItem('Token')
      token = token.replace('Bearer', '');
      const decoded = jwt_decode(token);
      axios.get(`http://localhost:5000/user/profile/${decoded.id}`)
        .then(res => {
          setUser(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
    catch (error) {
      navigate('/')
    }

  }, [])

  const adminAcessUser = () => {
    if (user.admin === false) {
      alert('Access denied')
      navigate('/profile')
    }
    else navigate('/view')
  }
  const adminAcessAdd = () => {
    if (user.admin === false) {
      alert('Access denied')
      navigate('/profile')
    }
    else navigate('/new_user')
  }
  const logOut = () => {
    navigate('/')
    sessionStorage.removeItem('Token')
  }

  return (
    <>
      <div>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Dashboard</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="btn btn-outline-success" to='/profile'>Home </Link>
              <button class="btn btn-sm btn-outline-secondary" onClick={adminAcessUser} >All User</button>
              <button class="btn btn-sm btn-outline-secondary" onClick={adminAcessAdd}>Add User</button>
              <button class="btn btn-sm btn-outline-danger" onClick={logOut}>Log out</button>
            </div>
          </div>
        </nav>
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