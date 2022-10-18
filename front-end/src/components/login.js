import React, { useState   } from 'react'
import {  Link ,useNavigate} from "react-router-dom"
import axios from 'axios'

function login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  async function addUser (e){
    e.preventDefault()
    try {
      const resp =await axios.post("http://localhost:5000/user/login", {
        email: email,
        password: password
      })
      if (resp.status === 200){
        alert("Logged in  successfuly")
        const token=resp.data.token
        sessionStorage.setItem('Token',token)
       navigate('/profile');
      } 
    } catch (error) {
      alert(error.response.data)
       navigate('/');
      console.log(error);
    } 
  }

  return (
    
    <form onSubmit={addUser}>
    <div>Log In</div><br></br>
    <div><label>Email</label><br></br>
          <input
           required="required"
            type="text"
            placeholder="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            
          />
        </div>
        <div><label>Password</label><br></br>
          <input
           required="required"
            type="text"
            placeholder="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
           
          />
        </div><br></br>
        <div>
          <button type="submit" >
            Add
          </button>
          <button type="reset">Reset</button>
        </div>
        <Link to={`/register`} >New user ? Sign up</Link>
        </form>

  )
}

export default login