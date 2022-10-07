import React, { useState, useEffect } from 'react'
import axios from 'axios'


function UserView({ mutate }) {
  
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
  }, [mutate,render])


  function deleteUser(id,e){
    console.log(id)
    axios.delete(`http://localhost:5000/user/${id}`)
    .then(res=>alert("User deleted successfuly"))
    .catch(error=>{console.log(error)})
    setRender(Math.random)
  }
  return (
    <>
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
                <button onClick={(e)=>deleteUser(data._id,e)}>Delete</button>
                </td></tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}
export default UserView