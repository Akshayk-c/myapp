import React, { useState, useEffect } from 'react'
import axios from 'axios'


function UserView() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([])
  const [render, setRender] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/user')
      .then(res => {
        setUsers(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [render])

  const addUser = async (e) => {
    e.preventDefault()
    try {
      const resp = await axios.post("http://localhost:5000/user", {
        email: email,
        lname: lname,
        fname: fname,
        password: password,
      });
      if (resp.status === 200) alert("User Added successfuly")
    } catch (error) {
      console.log(error.resp);
    }
    setRender(Math.random)
  }
  function deleteUser(id, e) {
    console.log(id)
    axios.delete(`http://localhost:5000/user/${id}`)
      .then(res => alert("User deleted successfuly"))
      .catch(error => { console.log(error) })
    setRender(Math.random)
  }
  return (
    <>
      <div>
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
            name="lname"
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Last name"
            name="fname"
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" onClick={addUser}>
            Add
          </button>
          <button type="reset">Reset</button>
        </div>
      </div>
      <label style={{ fontSize: 'large' }}>USER DETAILS</label>
      <table style={{ border: 'double' }} >
        <thead><tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Email id</th>
          <th>Password</th>
          <th>Edit</th>
          <th>Delete</th></tr>
        </thead>
        <tbody>
          {
            users.map((data) => (
              <tr key={data._id}>
                <td>{data.fname}</td>
                <td>{data.lname}</td>
                <td>{data.email}</td>
                <td>{data.password}</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button onClick={(e) => deleteUser(data._id, e)}>Delete</button>
                </td></tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}
export default UserView