
import React, { useState } from 'react'
import axios from 'axios'


  

function NewUser() {

const [fname, setFname] = useState("");
const [lname, setLname] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

async function addUser (e){
    e.preventDefault()
    try {
      const resp =await axios.post("http://localhost:5000/user", {
        email: email,
        lname: lname,
        fname: fname,
        password: password,
      });
      if (resp.status === 200) alert("User Added successfuly")
    } catch (error) {
      console.log(error.resp);
    }
    
  }
  return (
    <>
    <div>NewUser</div>
    <div>
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="First Name"
            name="fname"
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Last name"
            name="lname"
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit" onClick={addUser}>
            Add
          </button>
          <button type="reset">Reset</button>
        </div>
        </>
  )
}

export default NewUser