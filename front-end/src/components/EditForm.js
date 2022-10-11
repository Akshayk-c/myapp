import React, { useState   } from 'react'
import axios from 'axios'
import {useLocation,useNavigate} from 'react-router-dom'

function EditForm() {
const loc=useLocation()
const data=(loc.state)
const navigate = useNavigate()
const [email, setEmail] = useState(data.email)
const [fname, setFname] = useState(data.fname)
const [lname, setLname] = useState(data.lname)
const [password, setPassword] = useState(data.password)
const formSubmit =async (e) => {
  e.preventDefault()
  try {
    const  res =await axios.put(`http://localhost:5000/user/${data._id}`, {
      email: email,
      lname: lname,
      fname: fname,
      password: password,
    });
    if (res.status === 200){
      alert("User Added successfuly")
      navigate('/')
    } 
  } catch (error) {
    console.log(error);
  } 
}
  return (
    <>
      <div>EditForm</div><br></br>
      <form onSubmit={formSubmit}>
      <div><label>ID</label><br></br>
          <input
            type="text"
            name="id"
            value={data._id}
            readOnly
          />
        </div>
        <div><label>Email</label><br></br>
          <input
            type="text"
            placeholder="Email"
            defaultValue={data.email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div><label>First Name</label><br></br>
          <input
            type="text"
            placeholder="First Name"
            id='fname'
            defaultValue={data.fname}
            onChange={(e) => setFname(e.target.value)}
            required
          />
        </div>
        <div><label>Last Name</label><br></br>
          <input
            type="text"
            placeholder="Last name"
            name="lname"
            defaultValue={data.lname}
            onChange={(e) => setLname(e.target.value)}
            required
          />
        </div>
        <div><label>Password</label><br></br>
          <input
            type="text"
            placeholder="password"
            name="password"
            defaultValue={data.password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          </div><br></br>
        <div>
          <button type="submit">
            submit
          </button>
          <button type="reset" >Reset</button>
        </div>
      </form>
    </>
  )
}

export default EditForm
