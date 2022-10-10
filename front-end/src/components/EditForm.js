import React, { useState   } from 'react'
import axios from 'axios'
import {useLocation} from 'react-router-dom'

function EditForm() {
const loc=useLocation()
const data=(loc.state)
const [fname, setFname] = useState(data.fname)
const [lname, setLname] = useState(data.lname)
const [email, setEmail] = useState(data.email)
const [password, setPassword] = useState(data.password)
const formSubmit = (e) => {
  console.log(email)
  console.log(fname)
  console.log(lname)
  console.log(password)
}
  return (
    <>
      <div>EditForm</div>
      <form >
        <div>
          <input
            type="text"
            placeholder="Email"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="First Name"
            id='fname'
            defaultValue={fname}
            onChange={(e) => setFname(e.target.value)}

          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Last name"
            name="lname"
            defaultValue={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="password"
            name="password"
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" onClick={formSubmit} >
            submit
          </button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </>
  )
}

export default EditForm
