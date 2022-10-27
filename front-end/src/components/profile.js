import React, { useEffect, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode'
import axios from 'axios'


function profile() {
  axios.defaults.headers.common = { 'Authorization': sessionStorage.getItem('Token') }
  const navigate = useNavigate();
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

  
  const logOut = () => {
    sessionStorage.removeItem('Token')
  }

  return (
    <>
      <div>

      

        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <span class="navbar-brand" >Navbar</span>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul class="navbar-nav ">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/profile">Home</Link>
        </li>
        <li class="nav-item">
        <Link class={`nav-link ${admin ? ' ': 'd-none'}`}  to='/view'  >All Users</Link>
        </li>
        <li class="nav-item">
        <Link class={`nav-link ${admin ? ' ': 'd-none'}`}  to='/new_user'>Add User</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link link-danger"  onClick={logOut} to='/'>Log out</Link>
        </li>
        
      </ul>
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