import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import  NavBar  from './NavBar'
import './styles/style.css'



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
      </div>
      <div>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner p-1 ">
    <div class="carousel-item active">
      <img src='images/welcome.jpg' class="d-block" alt="..."/>
    </div>
    <div class="carousel-item">
    <div class='outerDiv .d-h-60vh ' >
    <div class="card mb-3 bg-dark">
  <img src="images/pro.svg.svg" class="card-img-top" alt="..."/>
  <div class="card-body text-light">
    <h5 class="card-title">Profile</h5>
    <p class="card-text">
     
        <p><span >First Name : </span>{user.fname}
        </p>
        <p><span>Last Name : </span>{user.lname}
        </p>
        <p><span>Email : </span>{user.email}
        </p>
        <p><span>password : </span>{user.password}
        </p>
      </p>
    <p class="card-text"><small class="text-success">Logged in</small></p>
  </div>
</div>
</div>  
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
    </>
  )
}

export default profile