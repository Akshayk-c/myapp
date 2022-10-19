
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
    <form onSubmit={addUser}>
    <div>NewUser</div>
    <div><label>Email</label><br></br>
          <input
           required="required"
            type="text"
            placeholder="Email"
            name="email"
            
            onChange={(e) => setEmail(e.target.value)}
            
          />
        </div>
        <div><label>First Name</label><br></br>
          <input
           required="required"
            type="text"
            placeholder="First Name"
            name="fname"
            onChange={(e) => setFname(e.target.value)}
            
          />
        </div>
        <div><label>Last Name</label><br></br>
          <input
           required="required"
            type="text"
            placeholder="Last name"
            name="lname"
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <div><label>Admin</label><br></br>
        <label>
          <input 
          type='radio' 
          name='admin'
          onClick={(e)=>setAdmin('true')}></input>Yes
          </label>
          <label>
          <input 
          type='radio'
          name='admin'
          defaultChecked
          onClick={(e)=>setAdmin('false')}></input>No
          </label>
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
          <Link to='/profile'>Go back</Link>
        </div>
        </form>
  )
}

export default NewUser