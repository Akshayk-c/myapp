
import React, { useState   } from 'react'
import {useNavigate,Link} from "react-router-dom"
import axios from 'axios'

function NewUser() {
axios.defaults.headers.common={'Authorization': sessionStorage.getItem('Token') }
const [fname, setFname] = useState('')
const [lname, setLname] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [admin, setAdmin] = useState('false')
const navigate = useNavigate();
async function addUser (e){
    e.preventDefault()
    try {
      const resp =await axios.post("http://localhost:5000/user", {
        email: email,
        lname: lname,
        fname: fname,
        password: password,
        admin : admin
      });
      if (resp.status === 200){
        alert("User Added successfuly")
       navigate('/view');
      } 
    } catch (error) {
      console.log(error);
    } 
  }
  
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">New User</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="btn btn-outline-success" to='/profile'>Home </Link>
              </div>
          </div>
        </nav>
    <form onSubmit={addUser}>
    <div><label>Email</label><br></br>
          <input
           required="required"
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            
          />
        </div>
        <div><label>First Name</label><br></br>
          <input
           required="required"
            type="text"
            name="fname"
            onChange={(e) => setFname(e.target.value)}
            
          />
        </div>
        <div><label>Last Name</label><br></br>
          <input
           required="required"
            type="text"
            name="lname"
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <div><label>Admin</label><br></br>
        
          <input 
          type='radio' 
          name='admin'
          onClick={(e)=>setAdmin('true')}></input>Yes
          
          <input 
          type='radio'
          name='admin'
          defaultChecked
          onClick={(e)=>setAdmin('false')}></input>No
          
        </div>
        <div><label>Password</label><br></br>
          <input
            type="text"
            placeholder="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required="required"
          />
        </div><br></br>
        <div>
          <button type="submit" >Add</button>
          <button type="reset">Reset</button>
        </div>
        </form>
        </>
  )
}

export default NewUser